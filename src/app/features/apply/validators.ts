

export const validateToApply = (params: any) => {
    const { vagaUuid, candidatoUuid } = params;
  
    if (typeof vagaUuid !== 'string') throw Error('ID de vaga inválido');
    if (typeof candidatoUuid !== 'string') throw Error('ID de candidato inválido');
    
  
    return { vagaUuid, candidatoUuid };
  }