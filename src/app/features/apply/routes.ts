import { Router } from "express";
import { authenticatedMiddleware } from "../../shared/middlewares/authenticatedMiddleware";
import { listApplyController, toApplyController } from "./controller";
import { isCandidatoMiddleware } from "../../shared/middlewares/isCandidatoMiddleware";

const applyRouter = Router();

applyRouter.get('/', listApplyController);

applyRouter.post(
  '/',
  [authenticatedMiddleware, isCandidatoMiddleware],
  toApplyController,
);

export { applyRouter };