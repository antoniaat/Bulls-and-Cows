import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../../../ContextWrapper";

import userService from "../../../services/user-service";

const Authorized = ({ history }) => {
  const { _, updateAuth } = useContext(AuthContext);

  function logout(e) {
    e.preventDefault();
    userService.logout();
    localStorage.removeItem("user");
    updateAuth(false);
    history.push("/home");
  }

  return (
    <ul>
      <li className="nav-link">
        <Link to="/highscore">Top Players</Link>
      </li>
      <li className="nav-link">
        <a href="#" onClick={logout}>
          Logout
        </a>
      </li>
      <li>
        <Link to="/play" className="btn primary-btn">
          Play
        </Link>
      </li>
    </ul>
  );
};

export default withRouter(Authorized);
