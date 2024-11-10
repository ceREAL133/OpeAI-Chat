import { Router } from "express";
import compression from "compression";
import { controller } from "../controllers/chat.controller";

const apiRouter = Router();

apiRouter.use(compression());

apiRouter.post('/chat', controller);

export default apiRouter;
