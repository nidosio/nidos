import {
  Controller,
  Get,
  Query,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { Book as BookType } from '../../../interfaces/books';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(@Query('query') query: string): Promise<BookType[]> {
    return this.booksService.getBooks(query);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: { buffer: Buffer }): void {
    return this.booksService.uploadBooks(file);
  }
}
