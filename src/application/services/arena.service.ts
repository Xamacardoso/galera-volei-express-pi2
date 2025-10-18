import { Arena } from "../../domain/entities/arena";

export interface ArenaService {
    createArena(input: Omit<Arena, "id">): Arena;
    getArenas(): Arena[];
    findArenaById(id: string): Arena | null;
}