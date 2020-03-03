import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import FormFooter from "../footer/FormFooter";
import userService from "../../../services/user-service";
import "../../../styles/styles.scss";
import logo from "../../../assets/images/logo.png";

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername({ username: e.target.value });
  }

  function handlePasswordChange(e) {
    setPassword({ password: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const user = { username, password };

    userService.login(user).then(data => {
      localStorage.setItem("user", JSON.stringify(data));
      history.push("/play");
    });
  }

  return (
    <div className="form-card">
      <section className="img-wrapper">
        <img src={logo} alt="logo"></img>
      </section>
      <form className="form" onSubmit={handleFormSubmit}>
        <h2>Sign In to your account</h2>
        <div className="form-row">
          <label>
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
            />
          </label>
        </div>

        <div className="form-row sign-in-row">
          <input
            className="btn primary-btn"
            type="submit"
            value="Sign in"
          ></input>
        </div>
        <div className="form-row">
          <p>
            Don't have an account?
            <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
      <FormFooter />
    </div>
  );
};

export default withRouter(LoginForm);
