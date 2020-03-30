import React from 'react';
import { mount } from 'enzyme';

import { bookMock } from 'components/books/BookDetails/BookDetails.fixture';
import AutoCompleteInput from './AutoCompleteInput';
import AutoCompleteList from './AutoCompleteList/AutoCompleteList';

const getWrapper = () =>
  mount(
    <AutoCompleteInput
      onChange={jest.fn()}
      onSelect={jest.fn()}
      suggestions={[bookMock, bookMock]}
    />
  );

describe('AutoCompleteInput', () => {
  it('renders a label', () => {
    const wrapper = getWrapper();
    const label = wrapper.find('label');
    expect(label.length).toBe(1);
    expect(label.text()).toEqual('Select a book:');
  });

  it('renders an input', () => {
    const wrapper = getWrapper();
    const input = wrapper.find('input');
    expect(input.length).toBe(1);
  });

  it('renders an auto-complete list', () => {
    const wrapper = getWrapper();
    const autoCompleteList = wrapper.find(AutoCompleteList);
    expect(autoCompleteList.length).toBe(1);
  });
});
