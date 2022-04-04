import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createTableReceivement1647479374163 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'receivement',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'account_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'category_receivement_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        length: '200'
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        length: '500'
                    },
                    {
                        name: 'value',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'date',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            'receivement',
            new TableForeignKey({
                name: 'account_fk',
                columnNames: ['account_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'account'
            })
        )
        await queryRunner.createForeignKey(
            'receivement',
            new TableForeignKey({
                name: 'category_receivement_fk',
                columnNames: ['category_receivement_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'category_receivement'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('receivement')
    }
}
