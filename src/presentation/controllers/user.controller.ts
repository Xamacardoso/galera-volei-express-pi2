import { Request, Response } from "express";
import { CreateUserInput, createUserSchema } from "../schema/user.schema";
import { UserService } from "../../application/services/user.service";

export class UserController {
    private userService: UserService;

    constructor (userService: UserService) {
        this.userService = userService;
    }

    public listUsers = async (req: Request, res: Response) => {
        const users = this.userService.listUsers();
        return res.status(200).json({
            message: "Users retrieved successfully",
            data: users
        });
    }

    public getUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = this.userService.getUserById(id);

        return res.status(200).json({
            message: "User retrieved successfully",
            data: user
        });
    }

    public createUser = async (req: Request<{}, {}, CreateUserInput>, res: Response) => {  
        const parsedUser = createUserSchema.parse(req.body);
        const newUser = this.userService.createUser(parsedUser);

        return res.status(201).json({
            message: "User created successfully",
            data: newUser
        });
    }
}
