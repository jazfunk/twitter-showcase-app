import React, {Component} from "react";
import JKLogo from "./images/titleGraphicWithLogo_TwitterColorsOPTIMIZED.svg"

class AppFooter extends Component {
  render() {
    return (
      <footer>
        <img id="jk-logo" src={JKLogo} alt="Jeff King"></img>
      </footer>
    )
  }
}

export default AppFooter