import * as path from 'path';

// TODO: add type
const typeormForSeedConfig = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  autoLoadEntities: true,
  entities: [path.resolve(__dirname, '**/*.model.{ts,js}')],
  dropSchema: true,
  factories: [path.resolve(__dirname, '**/*.factory.{ts,js}')],
  seeds: [path.resolve(__dirname, '**/*.seed.{.ts,.js}')],
};

// @ts-ignore
export = typeormForSeedConfig;
