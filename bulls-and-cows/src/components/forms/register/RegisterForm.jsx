import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormFooter from "../footer/FormFooter";
import "../../../styles/styles.scss";
import logo from "../../../assets/images/logo.png";
import userService from "../../../services/user-service";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      bestGame: 0
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleFormSubmit() {
    userService.register(this.state);
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="form-card">
        <section className="img-wrapper">
          <img src={logo} alt="logo"></img>
        </section>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <h2>Create account</h2>
          <div className="form-row">
            <label>
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
              />
            </label>
          </div>
          <div className="form-row">
            <input
              className="btn primary-btn"
              type="submit"
              value="Sign up"
            ></input>
          </div>
          <div className="form-row">
            <p>
              Already have an account?
              <Link to="/login">Sign In</Link>
            </p>
          </div>
        </form>
        <FormFooter />
      </div>
    );
  }
}
