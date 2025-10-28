import z from "zod";

export const createArenaSchema = z.object({
    name: z.string()
        .nonempty("O nome da arena é obrigatório")
        .min(3, "O nome da arena deve ter no mínimo 3 caracteres")
        .max(60, "O nome da arena deve ter no máximo 60 caracteres"),
    address: z.string()
        .min(3, "O endereço da arena deve ter no mínimo 3 caracteres")
        .max(120, "O endereço da arena deve ter no máximo 120 caracteres")
        .optional()
})

export type CreateArenaInput = z.infer<typeof createArenaSchema>;