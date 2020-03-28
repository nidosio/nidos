import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/common';
import { of } from 'rxjs';

import { BooksService } from './books.service';
import { BookQueryResponse } from './books';

describe('BooksService', () => {
  let service: BooksService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [BooksService],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    service = module.get<BooksService>(BooksService);

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
});
