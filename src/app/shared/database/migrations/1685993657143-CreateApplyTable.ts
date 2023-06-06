import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class CreateApplyTable1685993657143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'apply',
            columns: [
              new TableColumn({ name: 'apply_uuid', type: 'varchar', isPrimary: true }),
              new TableColumn({ name: 'apply_vaga_uuid', type: 'varchar' }),
              new TableColumn({ name: 'apply_candidato_uuid', type: 'varchar' }),
              new TableColumn({ name: 'apply_data', type: 'timestamp' }),
              new TableColumn({ name: 'apply_success', type: 'boolean' }),
            ],
            foreignKeys: [
              {
                columnNames: ['apply_vaga_uuid'],
                referencedTableName: 'vagas',
                referencedColumnNames: ['vaga_uuid']
              },
              {
                columnNames: ['apply_candidato_uuid'],
                referencedTableName: 'users',
                referencedColumnNames: ['user_uuid']
              }
            ]
        })
    );
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('apply');
    }

}
