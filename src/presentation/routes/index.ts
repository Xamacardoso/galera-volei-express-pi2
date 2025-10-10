import { Router } from "express";
import matchRouter from "./match.routes";
import userRouter from "./user.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/matches", matchRouter);

export {router as routes};