import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("expect to render the card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});

// console.log(shallow(<Card />));
