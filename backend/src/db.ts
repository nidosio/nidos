import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { Experience } from './experiences/experience.entity';
import { Theme } from './theme/theme.entity';

config();

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, NODE_ENV } = process.env;

export const ormOptions: TypeOrmModuleOptions = {
  database: DB_USERNAME,
  entities: [Experience, Theme],
  host: DB_HOST,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT),
  synchronize: NODE_ENV !== 'production',
  type: 'postgres',
  username: DB_USERNAME,
};
