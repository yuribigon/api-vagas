import { Request, Response } from "express";
import { handleControllerError } from "../../shared/exceptions";
import { ApplyRepository } from "./repository";
import { User } from "../../models/user";
import { UnauthorizedError } from "../../shared/exceptions/unauthorizedError";
import { validateToApply } from "./validators";
import { ToApplyUsecase } from "./usecases/toApplyUsecase";


export const listApplyController = async (req: Request, res: Response) => {
  try {
    const repository = new ApplyRepository();
    const allApply = await repository.listAllApply();
    return res.status(200).send(allApply);
  } catch (error) {
    handleControllerError(error, res);
  }
}

export const toApplyController = async (req: Request, res: Response) => {
  try {
    const { authenticatedUser } = req.body;
    if (!(authenticatedUser instanceof User)) throw new UnauthorizedError('Usuário não autenticado');

    const toApply = validateToApply(req.body);

    const applyRepository = new ApplyRepository();
    const toApplyUsecase = new ToApplyUsecase(applyRepository);
    const toApplyConfirmed = await toApplyUsecase.execute(toApply, authenticatedUser);

    return res.status(201).send(toApplyConfirmed);
  } catch (error) {
    handleControllerError(error, res);
  }
}
