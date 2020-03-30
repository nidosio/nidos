import React from 'react';
import { shallow } from 'enzyme';
import BookDetails from './BookDetails';
import { bookMock } from './BookDetails.fixture';
import BookImage from './BookImage/BookImage';

const getWrapper = () => shallow(<BookDetails book={bookMock} />);

describe('BookDetails', () => {
  it('renders a book-cover', () => {
    const wrapper = getWrapper();
    const bookCover = wrapper.find(BookImage);

    expect(bookCover.length).toBe(1);
    expect(bookCover.prop('url')).toEqual(bookMock.bookCover!.url);
    expect(bookCover.prop('description')).toEqual(
      bookMock.bookCover!.description
    );
  });

  it('renders title', () => {
    const wrapper = getWrapper();
    const title = wrapper.find('h1');

    expect(title.length).toBe(1);
    expect(title.text()).toEqual(bookMock.title);
  });

  it('renders description', () => {
    const wrapper = getWrapper();
    const description = wrapper.find('p');

    expect(description.length).toBe(1);
    expect(description.text()).toEqual(bookMock.description);
  });
});
