import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createTableDebit1647479385308 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'debit',
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
                        name: 'category_debit_id',
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
            'debit',
            new TableForeignKey({
                name: 'account_fk',
                columnNames: ['account_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'account'
            })
        )
        await queryRunner.createForeignKey(
            'debit',
            new TableForeignKey({
                name: 'category_debit_fk',
                columnNames: ['category_debit_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'category_debit'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('debit')
    }
}
