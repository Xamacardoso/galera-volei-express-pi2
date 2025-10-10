import { Router } from "express";

const matchRouter = Router();

matchRouter.get('/', (req, res) => {
    return res.status(245).json({ message: "Match route is in progress!" });
});

export default matchRouter;