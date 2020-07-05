import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Logo from 'components/navigation/Header/Logo/Logo';

const setup = () => {
  const utils = render(<Logo />);

  return {
    ...utils,
  };
};

describe('LandingCard', () => {
  it('renders', () => {
    const { container } = setup();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <img
        alt="Nidos Logo"
        class="Logo__StyledImg-sc-1yyl33r-0 laUOoU"
        src="/logo.svg"
      />
    `);
  });
});
