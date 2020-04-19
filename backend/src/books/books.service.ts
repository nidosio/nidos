import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as Papa from 'papaparse';
import { Readable } from 'stream';
import { validate, ValidationError } from 'class-validator';

import { BookQueryResponse, BookUploadResult } from './books';
import { Book as BookType } from '../../../interfaces/books';
import { Book } from './book.entity';
import { BookDto } from './book.dto';

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

const validateBooks = async (
  books: BookDto[],
): Promise<{
  books: BookDto[];
  errors: Record<string, ValidationError[]>;
}> => {
  const allErrors: Record<string, ValidationError[]> = {};

  const validatedBooks = (
    await Promise.all(
      books.map(async book => {
        const errors = await validate(book);
        if (errors.length > 0) {
          allErrors[book.isbn] = errors;
          return undefined;
        } else {
          return book;
        }
      }),
    )
  ).filter(book => book !== undefined);

  return { books: validatedBooks, errors: allErrors };
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

  async uploadBooks(file: { buffer: Buffer }): Promise<BookUploadResult> {
    const stream = bufferToStream(file.buffer);
    return new Promise(async (resolve, reject) => {
      Papa.parse(stream, {
        header: true,
        skipEmptyLines: 'greedy',
        complete: async result => {
          try {
            const books = result.data.map(book => new BookDto(book));
            const { books: validatedBooks, errors } = await validateBooks(
              books,
            );
            await this.booksRepository.save(validatedBooks, { chunk: 1000 });
            resolve({
              booksToUpload: books.length,
              booksUploaded: validatedBooks.length,
              errors,
            });
          } catch (e) {
            reject(e);
          }
        },
      });
    });
  }
}
