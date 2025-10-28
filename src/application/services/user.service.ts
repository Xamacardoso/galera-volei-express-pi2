import { User } from "../../domain/entities/user";
import { CreateUserInput } from "../../presentation/schema/user.schema";

export interface UserService {
    createUser(input: CreateUserInput): User;
    listUsers(): User[];
    getUserById(id: string): User | null;
}
