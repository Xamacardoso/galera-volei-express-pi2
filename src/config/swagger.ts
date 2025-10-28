import { OpenApiGeneratorV3, OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { userResponseSchema, createUserSchema } from "../presentation/schema/user.schema";

export function generateSwaggerDoc() : object {
  const registry = new OpenAPIRegistry();

  // Registrando schemas para serem referenciados
  registry.register("CreateUserInput", createUserSchema);
  registry.register("UserResponse", userResponseSchema);

  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
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
}