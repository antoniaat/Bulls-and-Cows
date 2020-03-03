import React from "react";
import cowImg from "../../../assets/images/cow.png";
import Zoom from "react-reveal/Zoom";

import "./SpeechBuble.scss";

const SpeechBuble = ({ msg }) => {
  return (
    <main>
      <div className="game-output-container">
        <section>
          <Zoom left>
            <div className="speech-bubble">{msg}</div>
          </Zoom>
        </section>
        <section>
          <img src={cowImg} alt="cow" />
        </section>
      </div>
    </main>
  );
};

export default SpeechBuble;
