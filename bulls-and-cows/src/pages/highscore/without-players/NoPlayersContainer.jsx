import React from "react";
import { Link } from "react-router-dom";

const NoPlayersContainer = () => {
  return (
    <div className="withouth-players">
      <h2>No one has played yet :(</h2>
      <Link className="btn primary-btn" to="/register">
        Register
      </Link>
    </div>
  );
};

export default NoPlayersContainer;
