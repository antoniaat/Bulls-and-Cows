import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Play from "./Play";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Play />
    </Router>
  );
});

describe("<Play /> rendering", () => {
  it("should render navbar container", () => {
    expect(wrapper.find("Navbar")).toHaveLength(1);
  });

  it("should render game container", () => {
    expect(wrapper.find("GameContainer")).toHaveLength(1);
  });
});
