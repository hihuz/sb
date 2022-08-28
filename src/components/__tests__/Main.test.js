import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Main from "../Main";

describe("Main", () => {
  test("Snapshot", () => {
    const component = shallow(<Main articles={[]} />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });

  test("Should render an Intro component and pass it its intro prop", () => {
    const intro = {
      title: "foo",
      text: "bar",
    };
    const component = shallow(<Main intro={intro} articles={[]} />);
    const child = component.find("Intro");
    expect(child.length).toEqual(1);
    expect(child.props().title).toEqual("foo");
    expect(child.props().text).toEqual("bar");
  });

  test("Should render a number of Sections components based off article prop", () => {
    const articles = [
      { name: "foo", title: "bla" },
      { name: "bar", title: "bleh" },
      { name: "baz", title: "bluh" },
    ];
    const component = shallow(<Main articles={articles} />);
    const sections = component.find("Section");
    expect(sections.length).toEqual(3);
    articles.forEach(({ name, title }, i) => {
      const child = sections.at(i);
      expect(child.props().title).toEqual(title);
      expect(child.props().name).toEqual(name);
    });
  });
});
