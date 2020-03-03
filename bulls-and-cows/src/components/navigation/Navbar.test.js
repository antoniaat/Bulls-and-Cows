import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Navbar from "./NavBar";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Navbar />
    </Router>
  );
});

describe("<Navbar /> rendering", () => {
  it("should render main navbar container", () => {
    expect(wrapper.find("div.navbar").exists()).toBeTruthy();
  });

  it("should render logo section", () => {
    expect(wrapper.find(".navbar .logo-container")).toHaveLength(1);
  });
});
