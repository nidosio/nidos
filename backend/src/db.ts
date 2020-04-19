import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { Book } from './books/book.entity';

config();

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

export const ormOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [Book],
  synchronize: true,
};
