import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext; // very specific name

  render() {
    const text = this.context === "english" ? "Submit" : "提交";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;