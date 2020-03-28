import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('Books Controller', () => {
  let controller: BooksController;
  let bookService: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      imports: [HttpModule],
      providers: [BooksService],
    }).compile();

    bookService = module.get<BooksService>(BooksService);
    controller = module.get<BooksController>(BooksController);

    jest
      .spyOn(bookService, 'getBooks')
      .mockReturnValue(
        new Promise(resolve =>
          resolve([{ authorName: 'author', isbn: ['1', '2'], title: 'title' }]),
        ),
      );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should request BookService with the query parameter', async () => {
    const result = await controller.getBooks('a query string');
    expect(bookService.getBooks).toHaveBeenCalledWith('a query string');
    expect(result).toEqual([
      { authorName: 'author', isbn: ['1', '2'], title: 'title' },
    ]);
  });
});
