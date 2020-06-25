import React, {Component} from "react"
import TwitterShowcase from "./TwitterShowcase"

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <TwitterShowcase />
      </header>
    )
  }
}

export default AppHeader