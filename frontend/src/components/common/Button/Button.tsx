import React, { MouseEvent, PropsWithChildren, FC } from 'react';
import styled from 'styled-components';

// @TODO use the barrel index.ts file when bug in https://github.com/typescript-eslint/typescript-eslint/issues/1746 is resolved
import { orange, grey } from 'styles/colors';
import { fontSize } from 'styles/typography';
import { spacing } from 'styles/dimensions';

interface Props {
  isSecondary?: boolean;
  onClick?: (event: MouseEvent) => void;
}

const StyledButton = styled.button<Pick<Props, 'isSecondary'>>`
  padding: ${spacing['2']} ${spacing['3']};
  margin: ${spacing['2']};
  border-radius: 4px;
  font-size: ${fontSize.normal};
  background: ${props => (props.isSecondary ? grey['3'] : orange['6'])};
  color: ${props => (props.isSecondary ? grey['8'] : grey['1'])};

  &:hover {
    cursor: pointer;
  }
`;

const Button: FC<PropsWithChildren<Props>> = ({
  isSecondary,
  onClick,
  children
}) => (
  <StyledButton onClick={onClick} isSecondary={isSecondary}>
    {children}
  </StyledButton>
);

export default Button;
