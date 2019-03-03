import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []); // [] only one time in total

  let content;
  if (errorMessage) content = <div>Error:{errorMessage}</div>;
  else if (lat) content = <SeasonDisplay lat={lat} />;
  else content = <Spinner message="Please accept location request" />;
  return <div className="border red">{content}</div>;
};

/*
class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  renderContent() {
    if (this.state.lat) return <SeasonDisplay lat={this.state.lat} />;
    if (this.state.errMessage) return <div>Error:{this.state.errMessage}</div>;
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
*/

ReactDOM.render(<App />, document.querySelector("#root"));
