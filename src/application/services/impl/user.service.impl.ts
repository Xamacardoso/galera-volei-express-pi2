import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/repositories/user.repository";
import { CreateUserInput } from "../../../presentation/schema/user.schema";
import { UserService } from "../user.service";
import { v4 } from "uuid";

export class UserServiceImpl implements UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    createUser(input: CreateUserInput): User {
        const user: User = {
            id: v4().toString(),
            name: input.name,
            age: input.age,
            category: input.category,	
            invitationCode: input.invitationCode,
            gender: input.gender
        }

        const newUser = this.userRepository.save(user);
        
        if (!newUser) {
            throw new Error("Failed to create user");
        }

        return newUser;
    }

    listUsers(): User[] {
        const users: User[] = this.userRepository.findAll();
        
        if (!users) {
            throw new Error("Failed to list users");
        }

        return users;
    }
    
    getUserById(id: string): User {
        const user: User | null = this.userRepository.findById(id);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
    
}