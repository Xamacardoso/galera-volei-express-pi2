import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { CreateUserInput } from "../../../presentation/schema/user.schema";
import { UserService } from "../user.service";

export class UserServiceImpl implements UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    createUser(input: CreateUserInput): User {
        throw new Error("Method not implemented.");
    }
    listUsers(): User[] {
        throw new Error("Method not implemented.");
    }
    getUserById(id: string): User | null {
        throw new Error("Method not implemented.");
    }
    
}