import React, {Component} from "react"
import TwitterShowcase from "./TwitterShowcase"

class AppMain extends Component {
  render() {
    return (
      <main>
        The Twitter Bridge
        <TwitterShowcase />
      </main>
    )
  }
}

export default AppMain