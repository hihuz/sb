import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Link from "../Link";

describe("Link", () => {
  test("Snapshot", () => {
    const component = shallow(<Link />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
