import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/common';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { of } from 'rxjs';
import { readFileSync } from 'fs';

import { BooksService } from './books.service';
import { BookQueryResponse, BookUploadResult } from './books';
import { Book } from './book.entity';
import { createTestConfiguration } from '../../test/db';

describe('BooksService', () => {
  let module: TestingModule;
  let service: BooksService;
  let httpService: HttpService;
  let repository: Repository<Book>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        HttpModule,
        TypeOrmModule.forRoot(createTestConfiguration([Book])),
        TypeOrmModule.forFeature([Book]),
      ],
      providers: [BooksService],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    service = module.get<BooksService>(BooksService);
    repository = module.get<Repository<Book>>(getRepositoryToken(Book));

    const data: BookQueryResponse = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      docs: [{ author_name: 'author', title: 'title', isbn: ['1', '2'] }],
    };

    jest.spyOn(httpService, 'get').mockReturnValue(
      of({
        config: {},
        data,
        headers: {},
        status: 200,
        statusText: '',
      }),
    );
  });

  afterAll(() => {
    module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should make a get request with the given query', async () => {
    const result = await service.getBooks('a query string');
    expect(httpService.get).toHaveBeenCalledWith(
      'http://openlibrary.org/search.json?q=a query string',
    );
    expect(result).toEqual([
      { authorName: 'author', isbn: ['1', '2'], title: 'title' },
    ]);
  });

  it('should sanitize the csv data and insert it into the database', async () => {
    const path = await import('path');
    const buffer = readFileSync(path.resolve(__dirname, '../../test/test.csv'));
    const result = await service.uploadBooks({ buffer });
    expect(result).toEqual<BookUploadResult>({
      booksToUpload: 3,
      booksUploaded: 2,
      errors: {
        '0674842111': [
          {
            children: [],
            constraints: {
              isInt: 'pages must be an integer number',
            },
            property: 'pages',
            target: {
              authors: 'Sam Bass Warner',
              description: undefined,
              edition: undefined,
              format: undefined,
              genres: undefined,
              imageUrl: undefined,
              isbn: '0674842111',
              pages: NaN,
              publicationDate: new Date('2001-05-31T21:00:00.000Z'),
              publisher: '4/20/2004',
              rating: NaN,
              ratingCount: 236,
              reviewCount: 61,
              title:
                'Streetcar Suburbs: The Process of Growth in Boston  1870-1900',
            },
            value: NaN,
          },
          {
            children: [],
            constraints: {
              isNumber:
                'rating must be a number conforming to the specified constraints',
            },
            property: 'rating',
            target: {
              authors: 'Sam Bass Warner',
              description: undefined,
              edition: undefined,
              format: undefined,
              genres: undefined,
              imageUrl: undefined,
              isbn: '0674842111',
              pages: NaN,
              publicationDate: new Date('2001-05-31T21:00:00.000Z'),
              publisher: '4/20/2004',
              rating: NaN,
              ratingCount: 236,
              reviewCount: 61,
              title:
                'Streetcar Suburbs: The Process of Growth in Boston  1870-1900',
            },
            value: NaN,
          },
        ],
      },
    });
    const books = await repository.find();
    expect(books).toEqual([
      {
        isbn: '9780439785969',
        title: 'Harry Potter and the Half-Blood Prince (Harry Potter  #6)',
        description: null,
        authors: 'J.K. Rowling/Mary GrandPré',
        edition: null,
        format: null,
        pages: 652,
        rating: 4.57,
        ratingCount: 2095690,
        reviewCount: 27591,
        genres: null,
        imageUrl: null,
        publicationDate: '2006-09-16',
        publisher: 'Scholastic Inc.',
      },
      {
        isbn: '9780439358071',
        title: 'Harry Potter and the Order of the Phoenix (Harry Potter  #5)',
        description: null,
        authors: 'J.K. Rowling/Mary GrandPré',
        edition: null,
        format: null,
        pages: 870,
        rating: 4.49,
        ratingCount: 2153167,
        reviewCount: 29221,
        genres: null,
        imageUrl: null,
        publicationDate: '2004-09-01',
        publisher: 'Scholastic Inc.',
      },
    ]);
  });

  it('returns an error when saving books to repository fails', async () => {
    const mockSave = jest.fn().mockImplementation(() => {
      throw new Error('testing error');
    });

    const path = await import('path');
    const buffer = readFileSync(path.resolve(__dirname, '../../test/test.csv'));
    service = new BooksService(httpService, ({
      save: mockSave,
    } as unknown) as Repository<Book>);
    try {
      await service.uploadBooks({ buffer });
    } catch (e) {
      expect(e).toEqual(new Error('testing error'));
    }
  });
});
