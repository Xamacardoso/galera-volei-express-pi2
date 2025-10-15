import { User } from "../entities/user";

export interface UserRepository {
    save(user: User): void;
    findAll(): User[];
    findById(id: string): User | null;
}