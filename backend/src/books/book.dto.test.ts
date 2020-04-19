import { BookDto } from './book.dto';

describe('Book DTO', () => {
  it('creates a new Book DTO', () => {
    new BookDto({});
  });

  it('parses the optional parameters', () => {
    expect(
      new BookDto({
        pages: '123',
        rating: '3.3',
        ratingCount: '1235',
        reviewCount: '123455',
        publicationDate: '2001/7/5',
      }),
    ).toEqual({
      authors: undefined,
      description: undefined,
      edition: undefined,
      format: undefined,
      genres: undefined,
      imageUrl: undefined,
      isbn: undefined,
      pages: 123,
      publicationDate: new Date('2001-07-04T21:00:00.000Z'),
      publisher: undefined,
      rating: 3.3,
      ratingCount: 1235,
      reviewCount: 123455,
      title: undefined,
    });
  });
});
