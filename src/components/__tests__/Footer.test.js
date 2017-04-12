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
});
