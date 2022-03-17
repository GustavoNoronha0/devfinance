import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createTableCategoryReceivement1647479353795 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'category_receivement',
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
            'category_receivement',
            new TableForeignKey({
                name: 'account_fk',
                columnNames: ['account_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'account'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category_receivement')
    }
}
