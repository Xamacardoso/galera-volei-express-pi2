import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserServiceImpl } from "../../application/services/impl/user.service.impl";
import { UserMockRepository } from "../../infrastructure/repositories/user-mock.repository";

const userRouter = Router();
const userController = new UserController(
    new UserServiceImpl(
        new UserMockRepository()
    )
);

userRouter.post('/', userController.createUser);
userRouter.get('/', userController.listUsers);
userRouter.get('/:id', userController.getUser);

export default userRouter;