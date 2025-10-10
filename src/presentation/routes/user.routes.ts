import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import { validate } from "../middlewares/validateMiddleware";
import { createUserSchema } from "../schema/user.schema";

const router = Router();

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       400:
 *         description: Bad Request (validation error)
 */
router.post('/', validate(createUserSchema), createUserController);

export default router;