import { Request, Response } from "express";
import { ArenaService } from "../../application/services/arena.service";
import { createArenaSchema } from "../schema/arena.schema";

export class ArenaController {
    constructor(private arenaService: ArenaService) {}

    public createArena = async (req: Request, res: Response) => {
        const parsedArena = createArenaSchema.parse(req.body);
        const newArena = this.arenaService.createArena(parsedArena);

        return res.status(201).json({
            message: "Arena created successfully",
            data: newArena
        });
    }

    public listArenas = async (req: Request, res: Response) => {
        const arenas = this.arenaService.listArenas();

        return res.status(200).json({
            message: "Arenas retrieved successfully",
            data: arenas
        });
    }

    public getArena = async (req: Request, res: Response) => {
        const { id } = req.params;
        const arena = this.arenaService.getArenaById(id);

        return res.status(200).json({
            message: "Arena retrieved successfully",
            data: arena
        });
    }
}