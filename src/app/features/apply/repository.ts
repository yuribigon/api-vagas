import { Repository } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { DatabaseConnection } from "../../../main/database";
import { Vaga } from "../../models/vaga";
import { ApplyEntity } from "../../shared/database/entites/apply.entity";
import { Apply } from "../../models/apply";


export class ApplyRepository {
  private applyRepository: Repository<ApplyEntity>;

  constructor() {
    this.applyRepository = DatabaseConnection.client.manager.getRepository(ApplyEntity);
  }

  listAllApply() : Promise<ApplyEntity[]> {
    return this.applyRepository.find();
  }

  async apply(infosToApply: Partial<ApplyEntity>) : Promise<Apply> {
    const applyConfirmed = await this.applyRepository.save({
      uuid: uuidv4(),
      ...infosToApply,
      dataApply: new Date().toISOString()
    });
    return ApplyRepository.entityToModel(applyConfirmed);
  }

  private static entityToModel(applyEntity: ApplyEntity) {
    return new Apply(
        applyEntity.uuid,
        applyEntity.candidatoUuid,
        applyEntity.vagaUuid,
        applyEntity.dataApply,
        applyEntity.success
    );
  }
}