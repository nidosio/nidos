import React, { FC } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { Book } from '../../../../../interfaces/books';
import BookImage from './BookImage/BookImage';

interface Props {
  book: Book;
}

const BookDetails: FC<Props> = ({ book }) => (
  <div>
    <Row start="xs" middle="xs">
      <Col xs={3}>
        {book.bookCover && (
          <BookImage
            url={book.bookCover.url}
            description={book.bookCover.description}
          />
        )}
      </Col>
      <Col xsOffset={1} xs={8}>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
      </Col>
    </Row>
  </div>
);

export default BookDetails;
