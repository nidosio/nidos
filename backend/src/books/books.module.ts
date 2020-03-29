import { Module, HttpModule } from '@nestjs/common';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  imports: [HttpModule],
  providers: [BooksService],
})
export class BooksModule {}
