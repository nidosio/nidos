import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from 'components/ui/TextInput/TextInput';

const onChangeMock = jest.fn();
const onKeyPressMock = jest.fn();
const onBlurMock = jest.fn();
const inputLabel = 'test label';

const setup = ({ value, placeholder }: { value?: string; placeholder?: string }) => {
  const utils = render(
    <TextInput
      id="input1"
      placeholder={placeholder}
      onChange={onChangeMock}
      label={inputLabel}
      onKeyPress={onKeyPressMock}
      onBlur={onBlurMock}
      value={value}
    />
  );

  const input = utils.getAllByLabelText(inputLabel)[0];

  return {
    input,
    ...utils,
  };
};

test('renders input field', () => {
  const { input } = setup({});
  expect(input).toBeDefined();
});

test('onChange', () => {
  const { input } = setup({});
  fireEvent.change(input, { target: { value: 'foo' } });

  expect(onChangeMock).toHaveBeenCalledWith('foo');
});

test('onBlur', () => {
  const { input } = setup({});
  fireEvent.blur(input);

  expect(onBlurMock).toHaveBeenCalledTimes(1);
});

test('onKeyPress', () => {
  const { input } = setup({});
  fireEvent.select(input);
  fireEvent.keyPress(input, { key: 'Enter', keyCode: 13 });

  expect(onKeyPressMock).toHaveBeenCalledTimes(1);
});

test('renders label', () => {
  const { getByText } = setup({});
  expect(getByText(inputLabel)).toBeDefined();
});

test('renders placeholder', () => {
  const { queryByText } = setup({ placeholder: 'placeholder123' });
  expect(queryByText('placeholder123')).toBeDefined();
});

test('renders pre-defined value', () => {
  const { queryByText } = setup({ value: 'value123' });

  expect(queryByText('value123')).toBeDefined();
});
