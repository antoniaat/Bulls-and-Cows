import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import Attempt from "./Attempt";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <Attempt attemptCount={4} guessedNumber="1234" bulls={1} cows={2} />
    </Router>
  );
});

describe("<Attempt /> rendering", () => {
  it("should render one container with attempt class", () => {
    expect(wrapper.find(".attempt").exists()).toBeTruthy();
  });

  it("should render icon container", () => {
    expect(wrapper.find(".icon")).toHaveLength(1);
  });

  it("should render content container", () => {
    expect(wrapper.find(".content")).toHaveLength(1);
  });

  it("should render two sections inside content container", () => {
    expect(wrapper.find(".content section")).toHaveLength(2);
  });
});

describe("<Attempt /> iterations", () => {
  it("attempt count should come from props", () => {
    const attemptCountContainer = wrapper.find(
      ".content section:first-child p"
    );
    expect(attemptCountContainer.text().includes("ATTEMPT 4")).toBe(true);
  });
  it("guessed number should come from props", () => {
    const guessedNumber = wrapper.find(".content h2");
    expect(guessedNumber.text().includes("1234")).toBe(true);
  });
  it("bulls and cows should come from props", () => {
    const bullsAndCowsContainer = wrapper.find(".bulls-and-cows");
    expect(bullsAndCowsContainer.text().includes("1 Bull 2 Cows")).toBe(true);
  });
});
