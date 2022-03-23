import * as path from 'path';

const typeormForSeedConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev_finance_pg_user',
  password: 'dev_finance_pg_pass',
  database: 'dev_finance_pg_db',
  autoLoadEntities: true,
  entities: [path.resolve(__dirname, '**/*.entity.{ts,js}')],
  synchronize: true,
  logging: true,
  factories: [path.resolve(__dirname, '**/*.factory.{ts,js}')],
  seeds: [path.resolve(__dirname, '**/*.seed.{.ts,.js}')],
};
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export = typeormForSeedConfig;
