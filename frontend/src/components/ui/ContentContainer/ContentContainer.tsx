import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { spacing } from 'styles';

const StyledContentContainer = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: ${spacing[2]};
`;

type Props = PropsWithChildren<unknown>;

const ContentContainer: FC<Props> = ({ children }: Props) => (
  <StyledContentContainer>{children}</StyledContentContainer>
);

export default ContentContainer;
