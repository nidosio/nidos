/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('dotenv');

config();

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

module.exports = {
  cli: {
    migrationsDir: 'migration',
  },
  database: DB_USERNAME,
  entities: ['dist/**/*.entity.js'],
  host: DB_HOST,
  migrations: ['dist/migration/*.js'],
  password: DB_PASSWORD,
  port: parseInt(DB_PORT),
  type: 'postgres',
  username: DB_USERNAME,
};
