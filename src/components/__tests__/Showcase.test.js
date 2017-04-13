import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Showcase from "../Showcase";

describe("Showcase", () => {
  test("Snapshot", () => {
    const component = shallow(<Showcase projects={[]} />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
