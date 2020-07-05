import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DefaultLayout from 'components/layouts/DefaultLayout';

const setup = () => {
  const utils = render(
    <DefaultLayout>
      <p>content</p>
    </DefaultLayout>
  );

  return {
    ...utils,
  };
};

describe('DefaultLayout', () => {
  it('renders ', () => {
    const { getByTestId, getByText } = setup();

    expect(getByTestId('header')).toBeDefined();
    expect(getByText('content')).toBeInTheDocument();
  });
});
