import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import LoginForm from "./LoginForm";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <LoginForm />
    </Router>
  );
});

describe("<LoginForm /> rendering", () => {
  it("should render one <form> tag", () => {
    expect(wrapper.find(".form").exists()).toBeTruthy();
  });

  it("should render 4 form rows", () => {
    expect(wrapper.find(".form-row")).toHaveLength(4);
  });

  it("should render logo wrapper", () => {
    expect(wrapper.find(".img-wrapper")).toHaveLength(1);
  });
  it("should render form title", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  });
  it("should render form footer", () => {
    expect(wrapper.find("footer")).toHaveLength(1);
  });

  it("should render form input fields", () => {
    expect(wrapper.find("input")).toHaveLength(3);
  });
});
