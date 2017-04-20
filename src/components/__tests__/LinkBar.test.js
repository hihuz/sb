import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import LinkBar from "../LinkBar";

describe("LinkBar", () => {
  test("Snapshot", () => {
    const component = shallow(<LinkBar links={[]} />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
