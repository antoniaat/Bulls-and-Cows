import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Player from "./Player";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Player username="TestUsername" bestGame={20} />
    </Router>
  );
});

describe("<Player /> rendering", () => {
  it("should render player container", () => {
    expect(wrapper.find("div.player").exists()).toBeTruthy();
  });

  it("should render username section", () => {
    expect(wrapper.find(".username")).toHaveLength(1);
  });
  it("should render points section", () => {
    expect(wrapper.find(".points")).toHaveLength(1);
  });
});

describe("<Player /> iterations", () => {
  it("username should come from props", () => {
    const usernameContainer = wrapper.find(".username");
    expect(usernameContainer.text().includes("TestUsername")).toBe(true);
  });
  it("points should come from props", () => {
    const pointsContainer = wrapper.find("article .points");
    expect(pointsContainer.text().includes("20")).toBe(true);
  });
});
