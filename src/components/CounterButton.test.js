import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("expect CounterButton component to rendr", () => {
  const mockColor = "red;";
  expect(shallow(<CounterButton red={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red;";
  const wrapper = shallow(<CounterButton red={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
});
