
>>> Requisito 6 - Aplicação de uma vaga pelo candidato
Um candidato pode se aplicar a várias vagas. Uma vaga por ter sido escolhida por diversos candidatos.
Para cada candidatura, armazenar:
- Data da aplicação
- Indicador de sucesso (se o candidato foi selecionado ou não).

## PENDENTE
Um candidato NÃO pode aplicar a uma vaga se:
- A data limite da vaga já foi alcançada
- A vaga não está ativa
- A vaga já está lotada de candidatos, quando tiver número máximo definido
- O candidato já se aplicou a mesma vaga
- O candidato for do tipo “admin” ou “recrutador”

>>> Requisito 7 - listagem de vagas do candidato
O candidato poderá listar as vagas em que ele se submeteu para aplicação.

>>> Requisito 8 - listagem de candidatos de uma vaga
Um usuário do tipo “recrutador” poderá listar todos os candidatos aplicados a uma determinada vaga.
- O recrutador só poderá listar informações das vagas que ele criou.

>>> Requisito 9 - Listagem de vagas e seus candidatos
Um usuário do tipo “recrutador” poderá listar todas as vagas que ele criou junto à informação dos candidatos associados a cada vaga.
- O recrutador só poderá listar informações das vagas que ele criou.

>>> Requisito 10 - Desativação/Ativação de uma vaga
Um usuário do tipo “recrutador” poderá desativar uma vaga ativa ou ativar uma vaga desativada.
Só poderão ser desativadas as vagas que estiverem com status “ativo”.
Só poderão ser ativadas as vagas que estiverem com status “não ativo” e dentro da data limite para candidaturas.

>>> Requisito 11 Release - Exclusão de uma vaga
Um usuário do tipo “recrutador” poderá excluir uma vaga. Só poderão ser excluídas as vagas que forem do mesmo recrutador.
Ao excluir uma vaga, as candidaturas já cadastradas também devem ser excluídas.

>>> Requisito 12 Release - Relatórios de pesquisa sobre vagas
Um usuário do tipo “admin” poderá listar vagas de todos os recrutadores, aplicando os possíveis filtros:
- Por data
- Por recrutador
- Por indicador ativo (sim/não)
Além disso, será possível listar as seguintes vagas:
- Que não possuem candidatos
- Que estão lotadas de candidatos (???)
