import { UserRepository } from "../../domain/repositories/user.repository";
import { User } from "../../domain/entities/user";

const users: User[] = [
    {
        id: "user_1678886400000",
        name: "João da Silva",
        age: 30,
        category: "INTERMEDIATE",
        gender: "MALE",
        invitationCode: "INV12345"
    },
    {
        id: "user_1678886400001",
        name: "Juniper Lee",
        age: 15,
        category: "BEGINNER",
        gender: "FEMALE",
        invitationCode: "INV12342"
    },
    {
        id: "user_1678886400002",
        name: "Iglesio Oliveira",
        age: 20,
        category: "PRO",
        gender: "MALE",
        invitationCode: "INV12347"
    }
]

export class UserMockRepository implements UserRepository {
    constructor (private users: User[] = users) {}

    save(user: User): void {
        users.push(user);
    }
    findAll(): User[] {
        return this.users;
    }
    findById(id: string): User | null {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }
}