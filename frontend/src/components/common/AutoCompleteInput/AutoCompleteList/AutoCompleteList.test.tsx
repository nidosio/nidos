import React from 'react';
import { mount } from 'enzyme';

import { bookMock } from 'components/books/BookDetails/BookDetails.fixture';
import AutoCompleteList from './AutoCompleteList';
import AutoCompleteListItem from './AutoCompleteListItem/AutoCompleteListItem';

const getWrapper = () =>
  mount(
    <AutoCompleteList
      isOpen={true}
      getMenuProps={jest.fn()}
      getItemProps={jest.fn()}
      highlightedIndex={0}
      suggestedItems={[bookMock, bookMock]}
    />
  );

describe('AutoCompleteList', () => {
  it('renders auto-complete list items', () => {
    const wrapper = getWrapper();
    const listItems = wrapper.find(AutoCompleteListItem);

    expect(listItems.length).toBe(2);
    const listItem = listItems.first();
    expect(listItem.props().item).toEqual(bookMock);
  });

  it('highlights item based on highlightedIndex', () => {
    const wrapper = getWrapper();
    const listItems = wrapper.find(AutoCompleteListItem);

    const firstListItem = listItems.first();

    expect(firstListItem.props().isHighlighted).toEqual(true);

    const lastListITem = listItems.last();

    expect(lastListITem.props().isHighlighted).toEqual(false);
  });
});
