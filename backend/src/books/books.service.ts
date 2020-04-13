import { Injectable, HttpService } from '@nestjs/common';
import { Readable } from 'stream';
import * as Papa from 'papaparse';

import { BookQueryResponse } from './books';
import { Book as BookType } from '../../../interfaces/books';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

/** https://stackoverflow.com/a/54136803 */
const bufferToStream = (buffer: Buffer): Readable => {
  const readableStream = new Readable({
    read(): void {
      this.push(buffer);
      this.push(null);
    },
  });

  return readableStream;
};

@Injectable()
export class BooksService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Book) private readonly booksRepository: Repository<Book>,
  ) {}

  async getBooks(query: string): Promise<BookType[]> {
    const response = await this.httpService
      .get<BookQueryResponse>(`http://openlibrary.org/search.json?q=${query}`)
      .toPromise();

    return response.data.docs.map(doc => ({
      title: doc.title,
      authorName: doc.author_name,
      isbn: doc.isbn,
    }));
  }

  uploadBooks(file: { buffer: Buffer }): void {
    const stream = bufferToStream(file.buffer);
    Papa.parse(stream, {
      header: true,
      complete: result => {
        result.data.forEach(book => {
          this.booksRepository.save(book);
        });
      },
    });
  }
}
