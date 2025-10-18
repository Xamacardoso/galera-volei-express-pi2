import { Arena } from "../../../domain/entities/arena";
import { ArenaRepository } from "../../../domain/repositories/arena.repository";
import { ArenaService } from "../arena.service";

export class ArenaServiceImpl implements ArenaService {
    private arenaRepository: ArenaRepository;

    constructor(arenaRepository: ArenaRepository) {
        this.arenaRepository = arenaRepository;
    }

    createArena(input: Omit<Arena, "id">): Arena {
        throw new Error("Method not implemented.");
    }
    getArenas(): Arena[] {
        throw new Error("Method not implemented.");
    }
    findArenaById(id: string): Arena | null {
        throw new Error("Method not implemented.");
    }
    
}