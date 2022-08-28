import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Link from "../Link";

describe("Link", () => {
  test("Snapshot", () => {
    // eslint-disable-next-line
    const component = shallow(<Link url="http://some.url" />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
