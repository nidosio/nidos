import React, { FC } from 'react';
import { UseComboboxPropGetters } from 'downshift';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import { Book } from '../../../../../../../interfaces/books';
import { spacing } from 'styles/dimensions';
import { grey } from 'styles/colors';

interface Props {
  item: Book;
  index: number;
  getItemProps: UseComboboxPropGetters<Book>['getItemProps'];
  isHighlighted: boolean;
}

const StyledListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${grey[2]};
  padding: ${spacing[2]} ${spacing[3]};
  &:hover {
    cursor: pointer;
  }
`;

const StyledCoverImg = styled.img`
  max-width: ${spacing[6]};
  margin-right: ${spacing[3]};
`;

const AutoCompleteListItem: FC<Props> = ({
  item,
  getItemProps,
  isHighlighted,
  index
}) => (
  <StyledListItem
    style={isHighlighted ? { backgroundColor: grey[2] } : {}}
    {...getItemProps({ item, index })}
  >
    <Row style={{ margin: 0 }}>
      {item.bookCover && (
        <Col>
          <StyledCoverImg
            src={item.bookCover.url}
            alt={item.bookCover.description}
          />
        </Col>
      )}

      <Col>
        <div>{item.title}</div>
        <div>Written by {item.authorName}</div>
      </Col>
    </Row>
  </StyledListItem>
);

export default AutoCompleteListItem;
