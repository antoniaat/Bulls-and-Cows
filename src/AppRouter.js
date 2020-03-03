import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/Home";
import PlayPage from "./pages/play/Play";
import HighscorePage from "./pages/highscore/Highscore";

import RegisterForm from "./components/forms/register/RegisterForm";
import LoginForm from "./components/forms/login/LoginForm";

const AppRouter = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/play" component={PlayPage} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/highscore" component={HighscorePage} />
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
