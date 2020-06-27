import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import TwitterLogo from "./images/Twitter_Logo_White.svg"

class AppNavigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expands="lg" className="navbar-height">
      <img id="twitter-logo" src={TwitterLogo} alt="Twitter"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="d-inline p-2 bg-dark text-white text-decoration-none" to="/home">
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
