import { Arena } from "../entities/arena";

export interface ArenaRepository {
    save(arena: Arena): void;
    findAll(): Arena[];
    findById(id: string): Arena | null;
}