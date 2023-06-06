
export class Vaga {
  constructor(
    private uuid: string,
    private descricao: string,
    private nomeEmpresa: string,
    private ativo: boolean,
    private dataLimite: string,
    private recrutadorUuid: string,
    private maxCandidatos?: number,
  ) {}

  toJson(): Vaga {
    return new Vaga(
      this.uuid,
      this.descricao,
      this.nomeEmpresa,
      this.ativo,
      this.dataLimite,
      this.recrutadorUuid,
      this.maxCandidatos
    );
  }
}
