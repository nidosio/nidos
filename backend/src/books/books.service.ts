import { Injectable, HttpService } from '@nestjs/common';

import { BookQueryResponse } from './books';
import { Book } from '../../../interfaces/books';

@Injectable()
export class BooksService {
  constructor(private httpService: HttpService) {}

  async getBooks(query: string): Promise<Book[]> {
    const response = await this.httpService
      .get<BookQueryResponse>(`http://openlibrary.org/search.json?q=${query}`)
      .toPromise();

    return response.data.docs.map(doc => ({
      title: doc.title,
      authorName: doc.author_name,
      isbn: doc.isbn,
    }));
  }
}
