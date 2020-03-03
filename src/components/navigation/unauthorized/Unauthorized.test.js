import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Unauthorized from "./Unauthorized";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Unauthorized />
    </Router>
  );
});

describe("<Unauthorized /> rendering", () => {
  it("should render unordered list", () => {
    expect(wrapper.find("ul").exists()).toBeTruthy();
  });

  it("should render 3 list items", () => {
    expect(wrapper.find("ul li")).toHaveLength(3);
  });
});
