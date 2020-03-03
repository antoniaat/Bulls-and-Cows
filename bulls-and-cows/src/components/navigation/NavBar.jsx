import React, { Component } from "react";
import AuthorizedNav from "./authorized/Authorized";
import UnauthorizedNav from "./unauthorized/Unauthorized";
import { Link } from "react-router-dom";

import logo from "../../assets/images/clean-logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({
      isLogged: user
    });
  }

  render() {
    return (
      <div className="navbar">
        <section className="logo-container">
          <Link to="/home">
            <img src={logo} alt="logo"></img>
          </Link>
        </section>
        <nav>
          {!this.state.isLogged ? <UnauthorizedNav /> : <AuthorizedNav />}
        </nav>
      </div>
    );
  }
}
