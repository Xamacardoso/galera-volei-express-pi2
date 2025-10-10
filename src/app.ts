import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { routes } from './presentation/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas da API
app.use(routes);

const generator = new OpenApiGeneratorV3(userRegistry.definitions);
const swaggerSpec = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Galera Vôlei Express API',
    version: '1.0.0',
    description: 'API para gerenciamento de jogadores de vôlei',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desenvolvimento',
    },
  ],
});

// Rota da documentação Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`API documentation available at http://localhost:${port}/docs`);
});