import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect CardList component to rendr", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Aman Khubani",
      email: "aman.khubani@gmail.com",
      username: "aman0802",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
