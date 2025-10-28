import { v4 } from "uuid";
import { Arena } from "../../../domain/entities/arena";
import { ArenaRepository } from "../../../domain/repositories/arena.repository";
import { CreateArenaInput } from "../../../presentation/schema/arena.schema";
import { ArenaService } from "../arena.service";

export class ArenaServiceImpl implements ArenaService {
    private arenaRepository: ArenaRepository;

    constructor(arenaRepository: ArenaRepository) {
        this.arenaRepository = arenaRepository;
    }

    createArena(input: CreateArenaInput): Arena {
        const arenaToCreate: Arena = {
            id: v4().toString(),
            name: input.name,
            address: input.address,
        }

        const newArena = this.arenaRepository.save(arenaToCreate);

        if (!newArena) {
            throw new Error("Failed to create arena");
        }

        return newArena;
    }

    listArenas(): Arena[] {
        const arenas : Arena[] = this.arenaRepository.findAll();

        if (!arenas) {
            throw new Error("Failed to list arenas");
        }

        return arenas;
    }
    
    getArenaById(id: string): Arena {
        const arenaToFind: Arena | null = this.arenaRepository.findById(id);

        if (!arenaToFind) {
            throw new Error("Arena not found");
        }

        return arenaToFind;
    }
    
}