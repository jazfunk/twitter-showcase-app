import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import TwitterLogo from "./images/Twitter_Logo_White.svg"

class AppNavigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expands="lg">
      <img id="twitter-logo" src={TwitterLogo} alt="Twitter"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-bar">
            <NavLink className="d-inline p-2 bg-dark text-white text-decoration-none" to="/">
              Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white text-decoration-none" to="/showcase">
              Showcase
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white text-decoration-none" to="/random">
              Random
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavigation;
