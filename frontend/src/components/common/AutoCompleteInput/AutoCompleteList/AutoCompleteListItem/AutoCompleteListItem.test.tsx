import React from 'react';
import { mount } from 'enzyme';
import { Col } from 'react-flexbox-grid';

import { bookMock } from 'components/books/BookDetails/BookDetails.fixture';
import AutoCompleteListItem from './AutoCompleteListItem';

const getWrapper = () =>
  mount(
    <AutoCompleteListItem
      isHighlighted={false}
      getItemProps={jest.fn()}
      index={0}
      item={bookMock}
    />
  );

describe('AutoCompleteListItem', () => {
  it('renders a book-cover', () => {
    const wrapper = getWrapper();

    const bookCover = wrapper.find('img');
    expect(bookCover.length).toBe(1);
    expect(bookCover.prop('src')).toEqual(bookMock.bookCover!.url);
    expect(bookCover.prop('alt')).toEqual(bookMock.bookCover!.description);
  });

  it('renders title', () => {
    const wrapper = getWrapper();
    const title = wrapper.find(Col).last().find('div').at(1);
    expect(title.text()).toEqual(bookMock.title);
  });

  it('renders author', () => {
    const wrapper = getWrapper();

    const authorRow = wrapper.find(Col).last().find('div').at(2);

    expect(authorRow.text()).toEqual(`Written by ${bookMock.authorName}`);
  });
});
