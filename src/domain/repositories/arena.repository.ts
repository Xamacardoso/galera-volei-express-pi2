import { Arena } from "../entities/arena";

export interface ArenaRepository {
    save(arena: Arena): Arena;
    findAll(): Arena[];
    findById(id: string): Arena | null;
}