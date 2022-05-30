import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlbumRefactoring1653893266003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "album" RENAME COLUMN "name" TO "title"`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "album" RENAME COLUMN "title" TO "name"`,
    )
  }
}
