import { Module, HttpModule } from '@nestjs/common';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [HttpModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
