import React, { useState } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import FormFooter from "../footer/FormFooter";
import userService from "../../../services/user-service";

import "../../../styles/styles.scss";
import logo from "../../../assets/images/logo.png";

const RegisterForm = ({ history }) => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  function handleFormSubmit() {
    const user = { username, password, firstName, lastName, bestGame: 0 };
    userService.register(user);
    history.push("/login");
  }

  return (
    <div className="form-card">
      <section className="img-wrapper">
        <img src={logo} alt="logo"></img>
      </section>
      <form className="form" onSubmit={handleFormSubmit}>
        <h2>Create account</h2>
        <div className="form-row">
          <label>
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={e => setUsername((username = e.target.value))}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword((password = e.target.value))}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName((firstName = e.target.value))}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span>Last Name</span>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName((lastName = e.target.value))}
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
};

export default withRouter(RegisterForm);
