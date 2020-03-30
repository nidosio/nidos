import React from "react";
import renderer from "react-test-renderer";

import BookImage from "./BookImage";

const urlMock = "foo.png";
const description = "A beautiful foo picture";

const getRenderer = () =>
  renderer.create(<BookImage url={urlMock} description={description} />);

describe("BookImage", () => {
  it("renders image", () => {
    const tree = getRenderer().toJSON();

    expect(tree).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        box-shadow: 0 10px 20px rgba(0,0,0,0.15),0 3px 6px rgba(0,0,0,0.1);
      }

      <img
        alt="A beautiful foo picture"
        className="c0"
        src="foo.png"
      />
    `);
  });
});
