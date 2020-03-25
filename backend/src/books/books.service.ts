import { Injectable } from '@nestjs/common';

import { BookQueryResponse } from '../types/external-apis';
import { Book } from '../types';
import { fetchJson } from '../fetch';

@Injectable()
export class BooksService {
  async getBooks(query: string): Promise<Book[]> {
    const response = await fetchJson<BookQueryResponse>(
      `http://openlibrary.org/search.json?q=${query}`,
    );
    const books: Book[] = response.docs.map(book => ({
      authorName: book.author_name,
      title: book.title,
      isbn: book.isbn,
    }));
    return books;
  }
}
