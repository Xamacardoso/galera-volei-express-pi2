import {z} from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

// Extende o Zod para suportar OpenAPI, permitindo adicionar metadados aos schemas
extendZodWithOpenApi(z);

// Schema pra criar usuario
export const createUserSchema = z.object({
    body: z.object({
        name: z.string().nonempty("Name is required"),
        password: z.string().min(6, "Password must be at least 6 characters long").nonempty("Password is required"),
        invitationCode: z.string().nonempty("Invitation code is required"),
        age: z.number().min(0, "Age must be a positive number"),
        category: z.enum(["beginner", "intermediate", "advanced", "pro"]),
        gender: z.enum(["male", "female"]).nonoptional("Gender is required")
    })
});

export const userResponseSchema = z.object({
    id: z.string().openapi({ example: 'user_1678886400000' }),
    name: z.string().openapi({ example: 'João da Silva' }),
    age: z.number().openapi({ example: 30 }),
    category: z.enum(['beginner', 'intermediate', 'advanced', 'pro']),
    gender: z.enum(['male', 'female']),
    createdAt: z.string().date().openapi({ example: '2025-10-10T12:00:00.000Z' })
});


export type CreateUserInput = z.infer<typeof createUserSchema>["body"];