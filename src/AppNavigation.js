import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import TwitterLogo from "./images/Twitter_Logo_White.svg"

class AppNavigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <img id="twitter-logo" src={TwitterLogo} alt="Twitter Logo"></img>
        <Navbar.Brand href="/">Tweet Bridge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-text">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/showcase">Showcase</Nav.Link>
            <Nav.Link href="/random">Random</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavigation;
