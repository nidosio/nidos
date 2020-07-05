import React, { FC } from 'react';
import styled from 'styled-components';
import { orange } from 'styles';

import ContentContainer from 'components/ui/ContentContainer/ContentContainer';
import Logo from './Logo/Logo';

const StyledHeader = styled.header`
  border-top: 3px solid ${orange[5]};
`;

const Header: FC = () => {
  return (
    <StyledHeader data-testid="header">
      <ContentContainer>
        <Logo />
      </ContentContainer>
    </StyledHeader>
  );
};

export default Header;
