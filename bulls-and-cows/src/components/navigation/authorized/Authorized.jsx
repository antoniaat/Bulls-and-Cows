import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import userService from "../../../services/user-service";

class Authorized extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    userService.logout();
    localStorage.removeItem("user");
    this.props.history.push("/home");
  }

  render() {
    return (
      <ul>
        <li className="nav-link">
          <Link to="/highscore">Top Players</Link>
        </li>
        <li className="nav-link">
          <a href="#" onClick={this.logout}>
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
  }
}

export default withRouter(Authorized);
