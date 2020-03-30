import React, { FC } from 'react';
import { UseComboboxPropGetters } from 'downshift';
import styled from 'styled-components';

import { Book } from '../../../../../../interfaces/books';
import { grey } from 'styles/colors';
import AutoCompleteListItem from './AutoCompleteListItem/AutoCompleteListItem';

interface Props {
  isOpen: boolean;
  getMenuProps: UseComboboxPropGetters<Book>['getMenuProps'];
  getItemProps: UseComboboxPropGetters<Book>['getItemProps'];
  highlightedIndex: number;
  suggestedItems: Book[];
}

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;

  background-color: ${grey[1]};
`;

const AutoCompleteList: FC<Props> = ({
  isOpen,
  getMenuProps,
  getItemProps,
  highlightedIndex,
  suggestedItems
}) => (
  <StyledList {...getMenuProps()}>
    {isOpen &&
      suggestedItems.map((item, index) => (
        <AutoCompleteListItem
          key={`${item.isbn}${index}`}
          item={item}
          index={index}
          isHighlighted={highlightedIndex === index}
          getItemProps={getItemProps}
        />
      ))}
  </StyledList>
);

export default AutoCompleteList;
