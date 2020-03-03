import React from "react";
import Fade from "react-reveal/Fade";
import Icons from "../../icons/ImageIconcs";

import "./Attempt.scss";

const Attempt = props => {
  const { attemptCount, guessedNumber, bulls, cows } = props;

  return (
    <Fade left cascade>
      <div className="attempt">
        <div className="icon">{Icons.target}</div>
        <div className="content">
          <section>
            <p>ATTEMPT {attemptCount}</p>
            <h2>{guessedNumber}</h2>
          </section>
          <section>
            <p className="bulls-and-cows">
              {bulls} {bulls > 1 ? "Bulls " : "Bull "}
              {cows} {cows > 1 ? "Cows " : "Cow "}
            </p>
          </section>
        </div>
      </div>
    </Fade>
  );
};

export default Attempt;
