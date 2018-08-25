import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import "./app.css";

const App = () => (
  <Router>
    <div>
      <nav className="home__nav">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/events">Events</Link>
        <Link to="/wtf">D.A.D.?</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
