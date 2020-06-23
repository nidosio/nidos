import React, { FC } from 'react';
import styled from 'styled-components';

import { grey, spacing, fontSize } from 'styles';

export interface Props {
  id: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  value?: string;
  onBlur?: () => void;
  onKeyPress?: (event: React.KeyboardEvent) => void;
}

export const StyledInput = styled.input`
  border: 2px solid ${grey[2]};
  border-radius: ${spacing[1]};
  box-sizing: border-box;
  width: 100%;
  padding: ${spacing[2]} ${spacing[3]};
  font-size: ${fontSize.medium};
  &:focus,
  &:hover {
    outline: none;
    border-color: ${grey[3]};
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  padding-bottom: ${spacing[2]};
  font-size: ${fontSize.medium};
`;

const Input: FC<Props> = ({ id, onChange, onBlur, onKeyPress, value, label, placeholder }: Props) => (
  <>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput
      id={id}
      onChange={(event) => onChange(event.target.value)}
      onBlur={() => onBlur && onBlur()}
      onKeyPress={(event) => onKeyPress && onKeyPress(event)}
      value={value}
      placeholder={placeholder}
    ></StyledInput>
  </>
);

export default Input;
