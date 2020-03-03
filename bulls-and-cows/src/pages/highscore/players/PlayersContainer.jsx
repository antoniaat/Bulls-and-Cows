import React from "react";
import Fade from "react-reveal/Fade";

import Player from "../../../components/player/Player";

const PlayersContainer = ({ players }) => {
  return (
    <>
      <Fade left>
        <header>Top 25 players</header>
      </Fade>
      {players.map((player, index) => {
        return (
          <Player
            key={index}
            username={player.username}
            bestGame={player.bestGame}
          ></Player>
        );
      })}
    </>
  );
};

export default PlayersContainer;
