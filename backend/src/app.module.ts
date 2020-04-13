import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './books/book.entity';

config();

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

const ormOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [Book],
  synchronize: true,
};

@Module({
  controllers: [AppController],
  imports: [BooksModule, TypeOrmModule.forRoot(ormOptions)],
  providers: [AppService],
})
export class AppModule {}
