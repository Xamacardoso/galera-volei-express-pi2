import {z} from "zod";

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


export type CreateUserInput = z.infer<typeof createUserSchema>["body"];