import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import {DB_ENTITIES} from './db_entities';

dotenv.config();
export const DB_CONFIG: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: DB_ENTITIES,
  autoLoadEntities: true,
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};