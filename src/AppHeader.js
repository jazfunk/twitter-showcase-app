import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import axios from "axios";

import Home from "./components/Home";
import Showcase from "./components/Showcase";
import Random from "./components/Random";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchURL: "",
      authBearer:
        "Bearer AAAAAAAAAAAAAAAAAAAAAF0IFwEAAAAAQCBmSM9wtuLGy2FVYeNr3Qo9kU4%3D2j6LiLWo1pMFZmNH9jzb0NmpaN0eDCVmCB11Gok2AakHGLt2ul",
      }
    }
  
  componentDidMount = () => {
    var getRequest = {
      method: 'get',
      url: 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAF0IFwEAAAAAQCBmSM9wtuLGy2FVYeNr3Qo9kU4%3D2j6LiLWo1pMFZmNH9jzb0NmpaN0eDCVmCB11Gok2AakHGLt2ul',
      }
    };
    
    axios(getRequest)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    return (
      <BrowserRouter>
        <header>
          <AppNavigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/showcase" exact component={Showcase} />
            <Route path="/random" exact component={Random} />
          </Switch>
        </header>
      </BrowserRouter>)
  }
}


export default AppHeader;
