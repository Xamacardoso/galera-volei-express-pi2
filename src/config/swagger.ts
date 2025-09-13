import swaggerJsdoc from 'swagger-jsdoc';
import { createUserSchema } from '../api/users/user.schema';

const swaggerDefinition = {
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
  components: {
    schemas: {
      // Schema manual baseado no Zod schema
      CreateUserInput: {
        type: 'object',
        required: ['name', 'password', 'invitationCode', 'age', 'category', 'gender'],
        properties: {
          name: { 
            type: 'string',
            description: 'Nome do usuário'
          },
          password: { 
            type: 'string',
            minLength: 6,
            description: 'Senha do usuário (mínimo 6 caracteres)'
          },
          invitationCode: { 
            type: 'string',
            description: 'Código de convite'
          },
          age: { 
            type: 'number',
            minimum: 0,
            description: 'Idade do usuário'
          },
          category: { 
            type: 'string',
            enum: ['beginner', 'intermediate', 'advanced', 'pro'],
            description: 'Nível de habilidade'
          },
          gender: { 
            type: 'string',
            enum: ['male', 'female'],
            description: 'Gênero do usuário'
          },
        },
      },
      UserResponse: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          age: { type: 'number' },
          category: { type: 'string', enum: ['beginner', 'intermediate', 'advanced', 'pro'] },
          gender: { type: 'string', enum: ['male', 'female'] },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};

const options: swaggerJsdoc.Options = {
  definition: swaggerDefinition,
  apis: ['./src/api/**/*.routes.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);