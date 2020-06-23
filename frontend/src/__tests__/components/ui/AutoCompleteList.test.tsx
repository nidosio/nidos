import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { grey } from 'styles/colors';
import AutoCompleteList from 'components/ui/AutoCompleteInput/AutoCompleteList/AutoCompleteList';
import { AutoCompleteSuggestion } from 'components/ui/AutoCompleteInput/AutoCompleteInput';

const getMenuPropsMock = jest.fn();
const getItemPropsMock = jest.fn();
const suggestedItems: AutoCompleteSuggestion[] = [
  { id: 'theme1', label: 'label 1 😊' },
  { id: 'theme2', label: 'label 2 😊' },
  { id: 'theme3', label: 'label 3 😊' },
];

const setup = (isOpen: boolean, highlightedIndex = 0) => {
  const utils = render(
    <AutoCompleteList
      isOpen={isOpen}
      getItemProps={getItemPropsMock}
      getMenuProps={getMenuPropsMock}
      highlightedIndex={highlightedIndex}
      suggestedItems={suggestedItems}
    />
  );
  return {
    ...utils,
  };
};

test('renders suggestions', () => {
  const { getByText } = setup(true);

  expect(getByText(suggestedItems[0].label)).toBeDefined();
  expect(getByText(suggestedItems[1].label)).toBeDefined();
  expect(getByText(suggestedItems[2].label)).toBeDefined();
});

test('hides list items when closed', () => {
  const { queryByText } = setup(false);

  expect(queryByText('label')).toBeFalsy();
});

test('highlights list item when it matches highlighted-id', () => {
  const { getByText } = setup(true, 2);

  expect(getByText(suggestedItems[2].label)).toHaveStyle({ 'background-color': grey[2] });
});
