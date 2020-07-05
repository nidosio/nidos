import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LandingCard from 'components/landing-page/LandingCard/LandingCard';

const setup = () => {
  const utils = render(<LandingCard />);

  return {
    ...utils,
  };
};

describe('LandingCard', () => {
  it('renders title', () => {
    const { getByText } = setup();
    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    const { getByText } = setup();

    expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBeInTheDocument();
  });

  it('renders img', async () => {
    const { findAllByAltText } = setup();
    expect((await findAllByAltText('A picture of a lady reading books')).length).toEqual(1);
  });
});
