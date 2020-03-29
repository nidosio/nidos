import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  controllers: [AppController],
  imports: [BooksModule],
  providers: [AppService],
})
export class AppModule {}
