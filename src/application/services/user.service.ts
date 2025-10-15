import { User } from "../../domain/entities/user";

export interface UserService {
    createUser(input: Omit<User, "id">): User;
    getUsers(): User[];
    findUserById(id: string): User | null;
}
