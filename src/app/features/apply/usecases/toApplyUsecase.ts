import { Apply } from "../../../models/apply";
import { User } from "../../../models/user";
import { ForbiddenError } from "../../../shared/exceptions/forbiddenError";
import { ApplyRepository } from "../repository";


export interface ToApplyDTO {
  vagaUuid: string
  candidatoUuid: string
}

export class ToApplyUsecase {
  constructor(private repository: ApplyRepository) {}

  async execute(toApply: ToApplyDTO, authenticatedUser: User): Promise<Apply> {
    if (!authenticatedUser.isCandidato()) {
      throw new ForbiddenError('Only candidato can apply');
    }
    return this.repository.apply(toApply);
  }
}