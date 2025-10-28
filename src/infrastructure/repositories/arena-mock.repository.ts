import { Arena } from "../../domain/entities/arena";
import { ArenaRepository } from "../../domain/repositories/arena.repository";

const arenas: Arena[] = [
    {
        id: '1',
        name: 'The Beach Arena',
        address: 'Sao Joao',
    },
    {
        id: '2',
        name: 'Set Point Arena',
        address: 'Zona Norte',
    },
    {
        id: '3',
        name: 'Arena do Vale',
        address: 'Vale Quem Tem'
    },
];

export class ArenaMockRepository implements ArenaRepository {
    constructor(private arenas: Arena[] = arenas) {}

    findAll() {
        return arenas;
    }

    findById(id: string) {
        return arenas.find(arena => arena.id === id) || null;
    }

    save(arena: Arena) {
        arenas.push(arena);
        return arena;
    }
}