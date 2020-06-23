import React, { FC } from 'react';
import { UseComboboxPropGetters } from 'downshift';
import styled from 'styled-components';

import { grey, spacing } from 'styles';
import { AutoCompleteSuggestion } from '../AutoCompleteInput';

interface Props {
  isOpen: boolean;
  getMenuProps: UseComboboxPropGetters<AutoCompleteSuggestion>['getMenuProps'];
  getItemProps: UseComboboxPropGetters<AutoCompleteSuggestion>['getItemProps'];
  highlightedIndex: number;
  suggestedItems: AutoCompleteSuggestion[];
}

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${spacing[10]};
  overflow: scroll;
`;

interface ListItemProps {
  isHighlighted: boolean;
}

const StyledListItem = styled.li<ListItemProps>`
  background-color: ${(props) => (props.isHighlighted ? grey[2] : grey[1])};
  border-bottom: 1px solid ${grey[2]};
  padding: ${spacing[2]} ${spacing[3]};
  &:hover {
    cursor: pointer;
  }
`;

const AutoCompleteList: FC<Props> = ({
  isOpen,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  suggestedItems,
}: Props) => (
  <StyledList {...getMenuProps()}>
    {isOpen &&
      suggestedItems.map((item, index) => (
        <StyledListItem key={index} {...getItemProps({ item, index })} isHighlighted={index === highlightedIndex}>
          {item.label}
        </StyledListItem>
      ))}
  </StyledList>
);

export default AutoCompleteList;
