import React from 'react';
import { useCombobox, UseComboboxState } from 'downshift';
import styled from 'styled-components';

import { Book } from '../../../../../interfaces/books';
import { StyledInput, StyledLabel } from '../TextInput/TextInput';
import AutoCompleteList from './AutoCompleteList/AutoCompleteList';

interface Props {
  suggestions: Book[];
  onChange: (searchTerm: string) => void;
  onSelect: (id: Book['isbn']) => void;
}

const InputContainer = styled.div`
  width: 100%;
`;

const AutoCompleteInput = ({ suggestions, onChange, onSelect }: Props) => {
  const onInputValueChange = ({
    inputValue
  }: Partial<UseComboboxState<Book>>) => {
    if (inputValue) {
      onChange(inputValue);
    }
  };
  const onSelectedItemChange = ({
    selectedItem
  }: Partial<UseComboboxState<Book>>) => {
    if (selectedItem) {
      onSelect(selectedItem.isbn);
    }
  };

  const itemToString = (book: Book) => book.title;

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: suggestions,
    onInputValueChange,
    onSelectedItemChange,
    itemToString
  });

  return (
    <>
      <StyledLabel {...getLabelProps()}>Select a book:</StyledLabel>
      <InputContainer {...getComboboxProps()}>
        <StyledInput {...getInputProps()} />
      </InputContainer>
      <AutoCompleteList
        isOpen={isOpen}
        getMenuProps={getMenuProps}
        getItemProps={getItemProps}
        suggestedItems={suggestions}
        highlightedIndex={highlightedIndex}
      />
    </>
  );
};

export default AutoCompleteInput;
