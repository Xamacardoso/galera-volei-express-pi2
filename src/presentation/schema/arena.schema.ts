import z from "zod";

export const createArenaSchema = z.object({
    name: z.string()
        .nonempty("Arena name is required")
        .min(3, "The arena name must be at least 3 characters long")
        .max(60, "The arena name must be at most 60 characters long"),
    address: z.string()
        .min(3, "The arena address must be at least 3 characters long")
        .max(120, "The arena address must be at most 120 characters long")
        .nonoptional("Arena address is required")
})

export type CreateArenaInput = z.infer<typeof createArenaSchema>;