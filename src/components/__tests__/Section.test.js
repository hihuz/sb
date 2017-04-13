import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Section from "../Section";

describe("Section", () => {
  test("Snapshot", () => {
    const component = shallow(<Section text={[]} />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
