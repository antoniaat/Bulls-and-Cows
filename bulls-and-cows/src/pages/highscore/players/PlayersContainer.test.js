import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import PlayersContainer from "./PlayersContainer";

let wrapper;
const players = [
  {
    _id: "5e5a7b7df35f9d1e40ae46ee",
    username: "john",
    password: "123",
    firstName: "John",
    lastName: "Smith",
    bestGame: 3
  }
];

beforeEach(() => {
  wrapper = mount(
    <Router>
      <PlayersContainer players={players} />
    </Router>
  );
});

describe("<PlayersContainer /> rendering", () => {
  it("should render header", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("header text content", () => {
    const header = wrapper.find("header");
    expect(header.text().includes("Top 25 players")).toBe(true);
  });

  it("players come from props", () => {
    expect(wrapper.find("Player")).toHaveLength(1);
  });
});
