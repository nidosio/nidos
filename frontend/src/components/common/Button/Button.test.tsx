import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  it('renders primary button', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
    .c0 {
      padding: 0.8rem 1.2000000000000002rem;
      margin: 0.8rem;
      border-radius: 4px;
      font-size: 1.125rem;
      background: hsl(14,89%,55%);
      color: hsl(216,33%,97%);
    }

    .c0:hover {
      cursor: pointer;
    }

    <button
      className="c0"
    />
  `);
  });

  it('renders secondary button', () => {
    const tree = renderer.create(<Button isSecondary />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
    .c0 {
      padding: 0.8rem 1.2000000000000002rem;
      margin: 0.8rem;
      border-radius: 4px;
      font-size: 1.125rem;
      background: hsl(210,16%,82%);
      color: hsl(209,18%,30%);
    }

    .c0:hover {
      cursor: pointer;
    }

    <button
      className="c0"
    />
  `);
  });

  it('calls onClick', () => {
    const onClickMock = jest.fn();
    const button = shallow(<Button onClick={onClickMock} />);

    button.simulate('click');

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
