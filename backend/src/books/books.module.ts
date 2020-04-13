import { Module, HttpModule } from '@nestjs/common';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';

@Module({
  controllers: [BooksController],
  imports: [HttpModule, TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
})
export class BooksModule {}
