import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Authorized from "./Authorized";

let wrapper;
const logout = jest.fn();

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Authorized />
    </Router>
  );
});

describe("<Authorized /> rendering", () => {
  it("should render unordered list", () => {
    expect(wrapper.find("ul").exists()).toBeTruthy();
  });

  it("should render 3 list items", () => {
    expect(wrapper.find("ul li")).toHaveLength(3);
  });
});

describe("<Authorized /> logout functionality", () => {
  it("logout onClick", () => {
    const logoutLink = mount(
      <a href="#" onClick={logout}>
        Logout
      </a>
    );
    logoutLink.simulate("click");
    expect(logout).toHaveBeenCalled();
  });
});
