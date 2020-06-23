import React, { FC, useState } from 'react';
import { useCombobox, UseComboboxState } from 'downshift';
import styled from 'styled-components';

import { StyledInput, StyledLabel } from '../TextInput/TextInput';
import AutoCompleteList from './AutoCompleteList/AutoCompleteList';

export interface AutoCompleteSuggestion {
  id: string;
  label: string;
}

interface Props {
  suggestions: AutoCompleteSuggestion[];
  onChange: (searchTerm: string | undefined) => void;
  onSelect: (id: string) => void;
  id: string;
  label?: string;
}

const InputContainer = styled.div`
  width: 100%;
`;

const AutoCompleteInput: FC<Props> = ({ suggestions, onChange, onSelect, label, id }: Props) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<AutoCompleteSuggestion[]>(suggestions);

  const onInputValueChange = ({ inputValue }: Partial<UseComboboxState<AutoCompleteSuggestion>>) => {
    if (inputValue) {
      const newSuggestionsList = suggestions.filter((suggestion) => suggestion.label.includes(inputValue));
      setFilteredSuggestions(newSuggestionsList);
    } else {
      setFilteredSuggestions(suggestions);
    }

    onChange(inputValue);
  };

  const onSelectedItemChange = ({ selectedItem }: Partial<UseComboboxState<AutoCompleteSuggestion>>) => {
    if (selectedItem && selectedItem.id) {
      onSelect(selectedItem.id);
    }
  };

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    id,
    items: filteredSuggestions,
    onInputValueChange,
    onSelectedItemChange,
    itemToString: (suggestion: AutoCompleteSuggestion) => suggestion.label,
    defaultHighlightedIndex: 0, // Auto highlights first suggestion
  });

  return (
    <>
      <StyledLabel {...getLabelProps()}>{label}</StyledLabel>
      <InputContainer {...getComboboxProps()}>
        <StyledInput {...getInputProps()} />
      </InputContainer>
      <AutoCompleteList
        isOpen={isOpen}
        getMenuProps={getMenuProps}
        getItemProps={getItemProps}
        suggestedItems={filteredSuggestions}
        highlightedIndex={highlightedIndex}
      />
    </>
  );
};

export default AutoCompleteInput;
