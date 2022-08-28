import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Project from "../Project";

describe("Project", () => {
  test("Snapshot", () => {
    const component = shallow(<Project id="test" author="hihuz" techs={[]} />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });

  test("Should point to github with passed project url", () => {
    const projectUrl = "some/url";
    const component = shallow(<Project projectUrl={projectUrl} techs={[]} />);
    const expected = `https://github.com/${projectUrl}`;
    const actual = component.find("a").props().href;
    expect(actual).toEqual(expected);
  });

  test("Should display title prop in an h2 tag", () => {
    const title = "sylvain";
    const component = shallow(<Project title={title} techs={[]} />);
    const expected = title;
    const actual = component.find("h2").text();
    expect(actual).toEqual(expected);
  });

  test("Should display desc prop in a p tag", () => {
    const desc = "boo";
    const component = shallow(<Project desc={desc} techs={[]} />);
    const expected = desc;
    const actual = component.find("p").text();
    expect(actual).toEqual(expected);
  });

  test("Should render a div with an image for each tech prop", () => {
    const techs = ["foo", "bar", "baz"];
    const component = shallow(<Project techs={techs} />);
    const children = component.find(".project-tech");
    expect(children.length).toEqual(techs.length);
    techs.forEach((tech, i) => {
      const expected = tech;
      const actual = children.at(i).text();
      expect(actual).toEqual(expected);
    });
  });
});
