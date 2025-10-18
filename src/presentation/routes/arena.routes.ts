import { Router } from "express";
import { ArenaController } from "../controllers/arena.controller";
import { ArenaService } from "../../application/services/arena.service";
import { ArenaServiceImpl } from "../../application/services/impl/arena.service.impl";
import { ArenaMockRepository } from "../../infrastructure/repositories/arena-mock.repository";

const arenaRouter = Router();
const arenaController = new ArenaController(
    new ArenaServiceImpl(
        new ArenaMockRepository()
    )
);

arenaRouter.post("/", arenaController.createArena);
arenaRouter.get("/", arenaController.getArenas);
arenaRouter.get("/:id", arenaController.findArenaById);

export default arenaRouter;