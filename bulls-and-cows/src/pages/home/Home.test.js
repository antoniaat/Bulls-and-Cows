import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Home from "./Home";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Home />
    </Router>
  );
});

describe("<Home /> rendering", () => {
  it("should render navbar container", () => {
    expect(wrapper.find("Navbar")).toHaveLength(1);
  });

  it("should render game info container", () => {
    expect(wrapper.find("GameInfo")).toHaveLength(1);
  });
});
