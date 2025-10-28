import { Router } from "express";
import { ArenaController } from "../controllers/arena.controller";
import { ArenaServiceImpl } from "../../application/services/impl/arena.service.impl";
import { ArenaMockRepository } from "../../infrastructure/repositories/arena-mock.repository";

const arenaRouter = Router();
const arenaController = new ArenaController(
    new ArenaServiceImpl(
        new ArenaMockRepository()
    )
);

arenaRouter.post("/", arenaController.createArena);
arenaRouter.get("/", arenaController.listArenas);
arenaRouter.get("/:id", arenaController.getArena);

export default arenaRouter;