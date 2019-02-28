import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  render() {
    if (this.state.lat) return <div>Latitude: {this.state.lat}</div>;
    if (this.state.errMessage) return <div>Error:{this.state.errMessage}</div>;
    return <div>loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
