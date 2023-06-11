import { Request, Response } from "express";
import { ForbiddenError } from "../../shared/exceptions/forbiddenError";
import { NotFoundError } from "../../shared/exceptions/notFoundError";
import { ValidationError } from "../../shared/exceptions/validationError";
import { UserRepository } from "./repository";
import { CreateUserUsecase } from "./usecases/createUserUsecase";
import { FindUserUsecase } from "./usecases/findUserUsecase";
import { ListUsersUsecase } from "./usecases/listUsersUsecase";
import { validateCreateUser, validateUsersFilter } from "./validators";
import { handleControllerError } from "../../shared/exceptions";

export const createUserController = async (req: Request, res: Response) => {
  try {
    console.log('[create-user-controller] Receive request in controller')
    
    const { authenticatedUser } = req.body;
    const userToCreate = validateCreateUser(req.body);

    const userRepository = new UserRepository();
    const createUserUsecase = new CreateUserUsecase(userRepository);
    const createdUser = await createUserUsecase.execute(userToCreate, authenticatedUser);

    return res.status(201).send({message: "Usuário criado com sucesso!", createdUser});

  } catch (error) {
    console.log('[create-user-controller] Error', error);
    handleControllerError(error, res);
  }
}

export const listUsersController = async (req: Request, res: Response) => {
  try {
    console.log('[list-users-controller] Receive request in controller')
    const usersFilter = validateUsersFilter(req.query);

    const userRepository = new UserRepository();
    const listUsersUsecase = new ListUsersUsecase(userRepository);
    const usersFound = await listUsersUsecase.execute(usersFilter);

    return res.status(200).send(usersFound);
  } catch (error) {
    console.log('[list-users-controller] Error', error);
    handleControllerError(error, res);
  }
}

export const findUserController = async (req: Request, res: Response) => {
  try {
    console.log('[find-user-controller] Receive request in controller')
    if (!req.params.uuid) throw new ValidationError('UUID não informado');

    const userRepository = new UserRepository();
    const findUserUsecase = new FindUserUsecase(userRepository);
    const userFound = await findUserUsecase.execute(req.params.uuid);

    if (!userFound) throw new NotFoundError('Usuário não encontrado');

    return res.status(200).send(userFound);
  } catch (error) {
    console.log('[find-user-controller] Error', error);
    handleControllerError(error, res);
  }
}
