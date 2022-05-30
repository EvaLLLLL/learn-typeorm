import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

export class CreatePlace1653894573652 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'place',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true },
          { name: 'name', type: 'varchar' },
        ],
      }),
      true,
    )

    await queryRunner.createIndex(
      'place',
      new TableIndex({ name: 'IDX_PLACE_NAME', columnNames: ['name'] }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('place')
  }
}
