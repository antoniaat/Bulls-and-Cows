import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Button from "./Button";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Button color="white" text="Test button" isDisabled={true} />
    </Router>
  );
});

describe("<Button /> rendering", () => {
  it("should render button element", () => {
    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});

describe("<Button /> iterations", () => {
  it("button text come from props", () => {
    expect(wrapper.text().includes("Test button")).toBe(true);
  });
});
