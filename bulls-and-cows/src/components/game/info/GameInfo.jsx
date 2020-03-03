import React from "react";
import bullsAndCowsImg from "../../../assets/images/bull-and-cow.jpg";

import "./GameInfo.scss";

const GameInfo = () => {
  return (
    <div className="game-info">
      <h2>Bulls and Cows</h2>
      <p>
        Bulls and Cows Game is also known as MasterMind. Computer selects a four
        digit number, all four digits are different. In current implementation
        number may not begin with 0. Any number can be guessed in many tries. In
        the attempts section you can see the total number of digits you guessed
        right - "Cows", "Bulls" shows how many of those that exists were placed
        at the right spots. Play by entering your guess in the 4 boxes on the
        right side and click "GUESS" to validate your entry. You may also click
        "New Game" to start another game, "Clear" to clear the input value or
        "Give up" to see the secret number.
      </p>
      <div className="img-wrapper">
        <img src={bullsAndCowsImg} alt="bulls and cows"></img>
      </div>
      <p>
        On a sheet of paper, the players each write a 4-digit secret number. The
        digits must be all different. Then, in turn, the players try to guess
        their opponent's number who gives the number of matches. If the matching
        digits are in their right positions, they are "bulls", if in different
        positions, they are "cows".
      </p>
    </div>
  );
};

export default GameInfo;
