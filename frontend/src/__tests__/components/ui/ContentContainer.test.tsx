import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContentContainer from 'components/ui/ContentContainer/ContentContainer';

const setup = () => {
  const utils = render(
    <ContentContainer>
      <h1>header</h1>
    </ContentContainer>
  );

  return {
    ...utils,
  };
};

describe('ContentContainer', () => {
  it('renders', () => {
    const { getByText, container } = setup();

    expect(getByText('header')).toBeInTheDocument();
    expect(container.children[0]).toHaveStyle({ 'max-width': '80rem' });
  });
});
