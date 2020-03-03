import React, { useContext } from "react";
import AuthorizedNav from "./authorized/Authorized";
import UnauthorizedNav from "./unauthorized/Unauthorized";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextWrapper";

import logo from "../../assets/images/clean-logo.png";

const Navbar = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="navbar">
      <section className="logo-container">
        <Link to="/home">
          <img src={logo} alt="logo"></img>
        </Link>
      </section>
      <nav>{auth ? <AuthorizedNav /> : <UnauthorizedNav />}</nav>
    </div>
  );
};

export default Navbar;
