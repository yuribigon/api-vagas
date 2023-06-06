import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { ApplyEntity } from "./apply.entity";

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn({ name: 'user_uuid' })
  uuid?: string
  
  @Column({ name: 'user_name' })
  name?: string
  
  @Column({ name: 'user_email' })
  email?: string
  
  @Column({ name: 'user_senha' })
  senha?: string

  @Column({ name: 'user_nome_empresa' })
  nomeEmpresa?: string

  @Column({ name: 'user_tipo' })  
  tipo?: string

  @OneToMany(() => ApplyEntity, (apply) => apply.candidato)
  // @JoinColumn({ name: 'apply', referencedColumnName: 'apply_candidato_uuid'})
  applys?: ApplyEntity[]

  // constructor(entity: Partial<ApplyEntity>) {
  //   Object.assign(this, entity)
  // }
}
