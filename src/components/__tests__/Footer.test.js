import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Footer from "../Footer";

describe("Footer", () => {
  test("Snapshot", () => {
    const component = shallow(<Footer />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });

  test("Should display the text passed as content props", () => {
    const content = "Hello";
    const component = shallow(<Footer content={content} />);
    const expected = content;
    const actual = component.text();
    expect(actual).toEqual(expected);
  });
});
