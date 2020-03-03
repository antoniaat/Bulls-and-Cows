import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <ul>
      <li className="nav-link">
        <Link to="/highscore">Top Players</Link>
      </li>
      <li className="nav-link">
        <Link to="/login">Login</Link>
      </li>
      <li className="nav-link">
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
}
