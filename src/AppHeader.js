import React, {Component} from "react"
import AppNav from "./AppNav"

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <AppNav />
      </header>
    )
  }
}

export default AppHeader