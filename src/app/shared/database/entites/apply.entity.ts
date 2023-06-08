import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { VagaEntity } from "./vaga.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'apply' })
export class ApplyEntity {
  @PrimaryColumn({ name: 'apply_uuid' })
  uuid!: string
  
  @Column({ name: 'apply_vaga_uuid' })
  vagaUuid!: string
  
  @Column({ name: 'apply_candidato_uuid' })
  candidatoUuid!: string

  @Column({ name: 'apply_data' })
  dataApply: string = "";

  @Column({ name: 'apply_success' })  
  success?: boolean

  @ManyToOne(()=> VagaEntity, (vaga) => vaga.applys)
  @JoinColumn({ name: 'apply_vaga_uuid'})
  vaga?: VagaEntity

  @ManyToOne(()=>UserEntity,  (candidato) => candidato.applys)
  @JoinColumn({ name: 'apply_candidato_uuid'})
  candidato?: UserEntity

  @BeforeInsert()
  beforeInsert() {
    this.dataApply = new Date().toISOString();
  }

}
