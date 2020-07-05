import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from 'components/navigation/Header/Header';

const setup = () => {
  const utils = render(<Header />);

  return {
    ...utils,
  };
};

describe('Header', () => {
  it('renders top border', () => {
    const { container } = setup();

    expect(container.children[0]).toHaveStyle({
      'border-top': '3px solid hsl(16,94%,61%)',
    });
  });

  it('renders logo', async () => {
    const { getAllByAltText } = setup();
    expect((await getAllByAltText('Nidos Logo')).length).toEqual(1);
  });
});
