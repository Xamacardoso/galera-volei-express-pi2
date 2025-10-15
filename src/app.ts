import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './presentation/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas da API
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`API documentation available at http://localhost:${port}/docs`);
});