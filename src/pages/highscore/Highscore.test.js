import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Highscore from "./Highscore";

let wrapper;
const players = [
  {
    _id: "5e5a7b7df35f9d1e40ae46ee",
    username: "john",
    password: "123",
    firstName: "John",
    lastName: "Smith",
    bestGame: 3
  },
  {
    _id: "6e5a7b7df35f9d1e40ae46ee",
    username: "brad",
    password: "123",
    firstName: "Brad",
    lastName: "Pitt",
    bestGame: 5
  },
  {
    _id: "7e5a7b7df35f9d1e40ae46ee",
    username: "admin",
    password: "123",
    firstName: "Antonia",
    lastName: "Atanasova",
    bestGame: 1
  }
];

const filteredPlayers = [
  {
    _id: "7e5a7b7df35f9d1e40ae46ee",
    username: "admin",
    password: "123",
    firstName: "Antonia",
    lastName: "Atanasova",
    bestGame: 1
  },
  {
    _id: "5e5a7b7df35f9d1e40ae46ee",
    username: "john",
    password: "123",
    firstName: "John",
    lastName: "Smith",
    bestGame: 3
  },
  {
    _id: "6e5a7b7df35f9d1e40ae46ee",
    username: "brad",
    password: "123",
    firstName: "Brad",
    lastName: "Pitt",
    bestGame: 5
  }
];

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Highscore />
    </Router>
  );
});

describe("<Highscore /> rendering", () => {
  it("should render one container with highscore-container class", () => {
    expect(wrapper.find("div.highscore-container").exists()).toBeTruthy();
  });
  it("should render navbar", () => {
    expect(wrapper.find("Navbar")).toHaveLength(1);
  });

  it("set players to state", () => {
    wrapper.setState({ players: players }, () => {
      wrapper.update();
      expect(wrapper.state("players")).toEqual(players);
    });
  });

  //   it("check if the players are sorted", () => {
  //     wrapper.setState({ players: players }, () => {
  //       wrapper.update();
  //     });

  //     const instance = wrapper.instance();
  //     instance.componentDidMount();
  //     expect(wrapper.state("players")).toEqual(filteredPlayers);
  //   });
});
