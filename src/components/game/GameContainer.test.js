import { mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import GameContainer from "./GameContainer";
import Button from "../button/Button";

let wrapper;
const clearInput = jest.fn();
const restartGame = jest.fn();
const showSecretNum = jest.fn();

beforeEach(() => {
  wrapper = mount(
    <Router>
      <GameContainer />
    </Router>
  );
});

describe("<GameContainer /> rendering", () => {
  it("should render main game container section", () => {
    expect(wrapper.find("div.game-container").exists()).toBeTruthy();
  });

  it("should render header container", () => {
    expect(wrapper.find("div.game-container header")).toHaveLength(1);
  });

  it("should render game buttons", () => {
    expect(wrapper.find(".game-buttons-container .btn")).toHaveLength(2);
  });

  it("should render form for user input", () => {
    expect(wrapper.find("form.user-input-container")).toHaveLength(1);
  });

  it("should render input fields in user input section", () => {
    expect(wrapper.find(".user-input-container input")).toHaveLength(2);
  });

  it("should render speech bubble component", () => {
    expect(wrapper.find("SpeechBuble")).toHaveLength(1);
  });
});

describe("<GameContainer /> buttons functionality", () => {
  it("clear button onClick", () => {
    const clearBtn = mount(<Button text="Clear" onClick={clearInput} />);
    clearBtn.simulate("click");
    expect(clearInput).toHaveBeenCalled();
  });

  it("new game button onClick", () => {
    const newGameBtn = mount(<Button text="New Game" onClick={restartGame} />);
    newGameBtn.simulate("click");
    expect(restartGame).toHaveBeenCalled();
  });
  it("give up button onClick", () => {
    const giveUpBtn = mount(<Button text="Give up" onClick={showSecretNum} />);
    giveUpBtn.simulate("click");
    expect(showSecretNum).toHaveBeenCalled();
  });
});
