import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Intro from "../Intro";

describe("Intro", () => {
  test("Snapshot", () => {
    const component = shallow(<Intro text={[]} />);
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });

  test("Should display the text passed as title props", () => {
    const title = "Hello";
    const component = shallow(<Intro title={title} text={[]} />);
    const expected = title;
    const actual = component.find(".intro-title").text();
    expect(actual).toEqual(expected);
  });

  test("Should render an h4 tags for each item in the text prop array and one for greetings", () => {
    const text = ["Hello", "World", "!"];
    const component = shallow(<Intro text={text} />);
    const expected = text.length + 1;
    const actual = component.find("h4").length;
    expect(actual).toEqual(expected);
  });

  test("Should display the text passed as greetings props in the last h4", () => {
    const text = ["Hello", "World!"];
    const greetings = "Wooo";
    const component = shallow(<Intro text={text} greetings={greetings} />);
    const expected = greetings;
    const actual = component.find("h4").last().text();
    expect(actual).toEqual(expected);
  });
});
