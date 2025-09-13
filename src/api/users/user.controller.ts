import { Request, Response } from "express";
import { CreateUserInput, createUserSchema } from "./user.schema";
import { z } from "zod";

export async function createUserController(req: Request<{}, {}, CreateUserInput>, res: Response) {
    try {
        // Validação adicional (opcional, já que o middleware já valida)
        const parsedData = createUserSchema.parse(req);
        const userData = parsedData.body;
        
        // Lógica de criação do usuário
        const createdUser = {
            id: "user_" + Date.now(),
            name: userData.name,
            age: userData.age,
            category: userData.category,
            gender: userData.gender,
            createdAt: new Date().toISOString()
        };
        
        return res.status(201).json({
            message: "User created successfully",
            data: createdUser
        });
        
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation error",
                errors: err.issues
            });
        }
        
        console.error("Error creating user:", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}