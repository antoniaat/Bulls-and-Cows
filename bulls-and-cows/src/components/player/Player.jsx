import React from "react";
import "./Player.scss";

const Player = ({ username, bestGame }) => {
  return (
    <div className="player">
      <article className="username">{username}</article>
      <article>
        <span className="points">{bestGame}</span>
        <span> attempts</span>
      </article>
    </div>
  );
};

export default Player;
