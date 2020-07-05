import React, { FC } from 'react';
import styled from 'styled-components';

import { spacing } from 'styles';
import ContentContainer from 'components/ui/ContentContainer/ContentContainer';
import AutoCompleteContainer from './AutoCompleteContainer/AutoCompleteContainer';

const StyledImg = styled.img`
  max-width: 20rem;
  width: 100%;
  padding: 0 ${spacing[2]};
`;

const StyledAutoCompleteContainer = styled.div`
  max-width: 20rem;
  padding: 0 ${spacing[2]};
  text-align: center;
`;

const StyledLandingCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  padding: ${spacing[6]} 0;
`;

const LandingCard: FC = () => {
  return (
    <ContentContainer>
      <StyledLandingCardContainer>
        <StyledAutoCompleteContainer>
          <h1>Lorem ipsum</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <AutoCompleteContainer />
        </StyledAutoCompleteContainer>
        <StyledImg alt="A picture of a lady reading books" src="landing-card.svg" />
      </StyledLandingCardContainer>
    </ContentContainer>
  );
};

export default LandingCard;
