import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import TextInput, { Props } from "./TextInput";

const getWrapper = (props: Props) => mount(<TextInput {...props} />);

const requiredProps: Props = {
  id: "id",
  onChange: jest.fn(),
};

describe("TextInput", () => {
  it("renders textInput with styles", () => {
    const tree = renderer.create(<TextInput {...requiredProps} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
      .c0 {
        border: 2px solid hsl(214,15%,91%);
        border-radius: 0.4rem;
        box-sizing: border-box;
        width: 100%;
        padding: 0.8rem 1.2000000000000002rem;
        font-size: 1.25rem;
      }

      .c0:focus,
      .c0:hover {
        outline: none;
        border-color: hsl(210,16%,82%);
      }

      <input
        className="c0"
        id="id"
        onChange={[Function]}
      />
    `);
  });

  it("renders value", () => {
    const value = "new value";
    const wrapper = getWrapper({ ...requiredProps, value });
    expect(wrapper.find("input").props().value).toEqual(value);
  });

  it("renders placeholder", () => {
    const placeholder = "placeholder text";
    const wrapper = getWrapper({ ...requiredProps, placeholder });
    expect(wrapper.find("input").props().placeholder).toEqual(placeholder);
  });

  it("calls onChange", () => {
    const wrapper = getWrapper({ ...requiredProps });

    const changeEvent = {
      target: { value: "newer value" },
    };

    wrapper.find("input").simulate("change", changeEvent);

    expect(requiredProps.onChange).toHaveBeenCalledWith(
      changeEvent.target.value
    );
  });

  it("calls onBlur", () => {
    const onBlur = jest.fn();
    const wrapper = getWrapper({ ...requiredProps, onBlur });

    wrapper.find("input").simulate("blur");
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
