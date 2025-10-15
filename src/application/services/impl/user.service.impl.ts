import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { UserService } from "../user.service";

export class UserServiceImpl implements UserService {
    private UserRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.UserRepository = userRepository;
    }

    createUser(input: Omit<User, "id">): User {
        throw new Error("Method not implemented.");
    }
    getUsers(): User[] {
        throw new Error("Method not implemented.");
    }
    findUserById(id: string): User | null {
        throw new Error("Method not implemented.");
    }
    
}