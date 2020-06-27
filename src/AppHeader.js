import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppNavigation from "./AppNavigation";

import Home from "./components/Home";
import Showcase from "./components/Showcase";
import Random from "./components/Random";

class AppHeader extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <AppNavigation />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/showcase" component={Showcase} />
            <Route path="/random" component={Random} />
          </Switch>
        </header>
      </BrowserRouter>
    );
  }
}

export default AppHeader;
