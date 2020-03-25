import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';

import { Book } from '../types';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getBooks(@Query('query') query: string): Promise<Book[]> {
    return this.bookService.getBooks(query);
  }
}
