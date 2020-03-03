import React, { useState, useEffect } from "react";

import Navbar from "../../components/navigation/NavBar";
import NoPlayersContainer from "./without-players/NoPlayersContainer";
import PlayersContainer from "./players/PlayersContainer";
import userService from "../../services/user-service";

import "./Highscore.scss";

const Highscore = () => {
  let [players, setPlayers] = useState([]);

  useEffect(() => {
    userService.getAllUsers().then(data => {
      const playersScores = data
        .sort((a, b) => (a.bestGame > b.bestGame ? 1 : -1))
        .filter(a => a.bestGame || a.bestGame !== 0)
        .slice(0, 25);

      setPlayers((players = playersScores));
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="highscore-container">
        {players.length > 0 ? (
          <PlayersContainer players={players} />
        ) : (
          <NoPlayersContainer />
        )}
      </div>
    </div>
  );
};

export default Highscore;
