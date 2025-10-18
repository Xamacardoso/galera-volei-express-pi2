import { ArenaService } from "../../application/services/arena.service";

export class ArenaController {
    constructor(private service: ArenaService) {}

    createArena(input: Omit<any, "id">) {
        return this.service.createArena(input);
    }

    getArenas() {
        return this.service.getArenas();
    }

    findArenaById(id: string) {
        return this.service.findArenaById(id);
    }
}