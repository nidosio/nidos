import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// @TODO auto-configure this to be available globally for all tests.
import '@testing-library/jest-dom';

import AutoCompleteInput, { AutoCompleteSuggestion } from 'components/ui/AutoCompleteInput/AutoCompleteInput';

const mockSuggestions: AutoCompleteSuggestion[] = [
  { id: 'theme1', label: 'label 1 😊' },
  { id: 'theme2', label: 'label 2 😊' },
  { id: 'theme3', label: 'label 3 😊' },
];

const onChangeMock = jest.fn();
const onSelectMock = jest.fn();
const inputLabel = 'test label';

const setup = () => {
  const utils = render(
    <AutoCompleteInput
      id="test-1"
      suggestions={mockSuggestions}
      onChange={onChangeMock}
      onSelect={onSelectMock}
      label={inputLabel}
    />
  );

  const input = utils.getAllByLabelText(inputLabel)[0];

  return {
    input,
    ...utils,
  };
};

test('renders input field', () => {
  const { input } = setup();
  expect(input).toBeDefined();
});

test('renders label', () => {
  const { getByText } = setup();
  expect(getByText(inputLabel)).toBeDefined();
});

test('renders suggestions', () => {
  const { input, getAllByRole } = setup();
  fireEvent.change(input, { target: { value: 'label' } });
  const suggestions = getAllByRole('option');

  expect(suggestions.length).toBe(3);
  expect(suggestions[0]).toHaveTextContent(mockSuggestions[0].label);
});

test('onChange', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'foo' } });

  expect(onChangeMock).toHaveBeenCalledWith('foo');
});

test('onSelect', () => {
  const { input, getAllByRole } = setup();
  fireEvent.change(input, { target: { value: 'label' } });

  const suggestions = getAllByRole('option');
  fireEvent.click(suggestions[1]);

  expect(onSelectMock).toHaveBeenCalledWith(mockSuggestions[1].id);
});

test('filters suggestions based on input', () => {
  const { input, getAllByRole } = setup();
  fireEvent.change(input, { target: { value: '2' } });

  const suggestions = getAllByRole('option');

  expect(suggestions.length).toBe(1);
  expect(suggestions[0]).toHaveTextContent(mockSuggestions[1].label);
});
