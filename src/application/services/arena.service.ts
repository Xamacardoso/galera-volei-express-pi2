import { Arena } from "../../domain/entities/arena";
import { CreateArenaInput } from "../../presentation/schema/arena.schema";

export interface ArenaService {
    createArena(input: CreateArenaInput): Arena;
    listArenas(): Arena[];
    getArenaById(id: string): Arena;
}