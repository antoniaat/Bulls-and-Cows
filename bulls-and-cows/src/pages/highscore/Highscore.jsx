import React, { Component } from "react";

import Navbar from "../../components/navigation/NavBar";
import NoPlayersContainer from "./withouth-players/NoPlayersContainer";
import PlayersContainer from "./players/PlayersContainer";
import userService from "../../services/user-service";

import "./Highscore.scss";

export default class Highscore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    userService.getAllUsers().then(data => {
      const players = data
        .sort((a, b) => (a.bestGame > b.bestGame ? 1 : -1))
        .filter(a => a.bestGame !== 0)
        .slice(0, 25);

      this.setState({
        players: players
      });
    });
  }

  render() {
    const players = this.state.players;

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
  }
}
