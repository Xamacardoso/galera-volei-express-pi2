import { User } from "../entities/user";

export interface UserRepository {
    save(user: User): User;
    findAll(): User[];
    findById(id: string): User | null;
}