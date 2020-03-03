import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import NoPlayersContainer from "./NoPlayersContainer";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <NoPlayersContainer />
    </Router>
  );
});

describe("<NoPlayersContainer /> rendering", () => {
  it("should render one container with withouth-players class", () => {
    expect(wrapper.find("div.withouth-players").exists()).toBeTruthy();
  });
  it("should render heading", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  });

  it("heading content should be 'No one has played yet :('", () => {
    const heading = wrapper.find("h2");
    expect(heading.text().includes("No one has played yet :(")).toBe(true);
  });

  it("should have register link", () => {
    expect(wrapper.find("Link")).toHaveLength(1);
  });
});
