import React, { Component } from "react";
import "./GameContainer.scss";

import SpeechBuble from "./speech-buble/SpeechBuble";
import Attempt from "./attempt/Attempt";
import Button from "../button/Button";

import gameService from "../../services/game-service";

export default class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessedNumber: "",
      secretNumber: gameService.generateSecretNumber(),
      attempts: [],
      attemptCount: 0,
      msg: "I thought of a 4-digit number. Can you guess it?",
      giveUpBtn: true,
      guessBtn: false
    };

    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updatedAttempts = this.updatedAttempts.bind(this);
    this.showSecretNum = this.showSecretNum.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  clearInput() {
    document.getElementsByClassName("guessed-number")[0].value = "";
  }

  checkAnswer(e) {
    e.preventDefault();

    const { guessedNumber, secretNumber, attemptCount } = this.state;
    const diffNumbers = /^(?!.*(.).*\1)\d{4}$/;

    if (diffNumbers.test(guessedNumber)) {
      const { bulls, cows } = gameService.getBullsAndCows(
        guessedNumber,
        secretNumber
      );

      if (bulls === 4) {
        const user = JSON.parse(localStorage.getItem("user"));
        let newUser = {
          ...user,
          bestGame: this.state.attemptCount
        };

        localStorage.setItem("user", JSON.stringify(newUser));
        gameService.updateUserPoints(newUser);

        this.setState({
          ...this.state,
          msg: `Congrats! You won the game with ${this.state.attemptCount} points!`
        });

        return;
      }

      const newAttemp = gameService.createAttempt(
        guessedNumber,
        bulls,
        cows,
        attemptCount + 1
      );

      this.updatedAttempts(newAttemp);
    } else {
      this.setState({
        ...this.state,
        msg: "Oops.. You number should be with 4 different digits!"
      });
    }
  }

  updatedAttempts(newAttempt) {
    this.setState({
      ...this.state,
      guessedNumber: "",
      attemptCount: newAttempt.attemptCount,
      attempts: [newAttempt, ...this.state.attempts],
      giveUpBtn: false
    });
  }

  handleInputChange(e) {
    if (e.target.value.length <= 4) {
      this.setState({
        ...this.state,
        guessedNumber: e.target.value
      });
    }
  }

  showSecretNum(e) {
    e.preventDefault();

    this.setState({
      ...this.state,
      msg: `The number is ${this.state.secretNumber}`,
      guessBtn: true
    });
  }

  restartGame() {
    this.setState({
      guessedNumber: "",
      secretNumber: gameService.generateSecretNumber(),
      attempts: [],
      attemptCount: 0,
      msg: "I thought of a 4-digit number. Can you guess it?",
      giveUpBtn: true,
      guessBtn: false
    });
  }

  render() {
    const { guessedNumber, attempts } = this.state;

    return (
      <div className="game-container">
        <section className="game">
          <header>
            <h2>Let's play</h2>
            <div className="game-buttons-container">
              <Button
                color="white"
                text="New Game"
                onClick={this.restartGame}
              />
              <Button color="white" text="Clear" onClick={this.clearInput} />
            </div>
            <form className="user-input-container">
              <input
                type="text"
                onChange={this.handleInputChange}
                value={guessedNumber}
                className="guessed-number"
                isDisabled={this.state.guessBtn}
              ></input>
              <input
                type="submit"
                className={`btn white-btn ${
                  this.state.guessBtn ? "disabled" : "avaliable"
                }`}
                value="GUESS"
                disabled={this.state.guessBtn}
                onClick={this.checkAnswer}
              />
              <Button
                color="white"
                text="Give up"
                onClick={this.showSecretNum}
                isDisabled={this.state.giveUpBtn}
              />
            </form>
          </header>
          <SpeechBuble msg={this.state.msg} />
        </section>
        <div>
          {attempts.map((item, index) => {
            return (
              <Attempt
                key={index}
                attemptCount={item.attemptCount}
                guessedNumber={item.guessedNumber}
                bulls={item.bulls}
                cows={item.cows}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
