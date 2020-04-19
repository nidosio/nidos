import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('Books Controller', () => {
  let controller: BooksController;
  let bookService: BooksService;

  beforeEach(async () => {
    bookService = ({
      getBooks: jest
        .fn()
        .mockReturnValue(
          new Promise(resolve =>
            resolve([
              { authorName: 'author', isbn: ['1', '2'], title: 'title' },
            ]),
          ),
        ),
      uploadBooks: jest.fn(),
    } as unknown) as BooksService;
    controller = new BooksController(bookService);
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

  it('should upload the books', async () => {
    const buffer = Buffer.from('a buffer string');

    await controller.uploadFile({ buffer });
    expect(bookService.uploadBooks).toHaveBeenCalledWith({ buffer });
  });
});
