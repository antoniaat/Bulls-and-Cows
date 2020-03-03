import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import SpeechBuble from "./SpeechBuble";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Router>
      <SpeechBuble msg="Test message" />
    </Router>
  );
});

describe("<SpeechBuble /> rendering", () => {
  it("should render <main>", () => {
    expect(wrapper.find("main").exists()).toBeTruthy();
  });

  it("should render game-output-container container", () => {
    expect(wrapper.find(".game-output-container")).toHaveLength(1);
  });

  it("should render two sections inside game-output-container container", () => {
    expect(wrapper.find(".game-output-container section")).toHaveLength(2);
  });

  it("should render speech bubble message box", () => {
    expect(wrapper.find(".speech-bubble")).toHaveLength(1);
  });
});

describe("<SpeechBuble /> iterations", () => {
  it("speech bubble message box text should come from props", () => {
    const msgBox = wrapper.find(".speech-bubble");
    expect(msgBox.text().includes("Test message")).toBe(true);
  });
});
