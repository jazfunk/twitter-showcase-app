import React from "react";
import TwitterLogo from "./images/Twitter_Logo_White.svg"

const AppNav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <img id="twitter-logo" src={TwitterLogo} alt="Twitter"></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            Home
          </a>
          <a className="nav-item nav-link" href="/">
            Showcase
          </a>
          <a className="nav-item nav-link" href="/">
            Random
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
