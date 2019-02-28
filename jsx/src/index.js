// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

const getButtonText = () => {
  return "Click on me!";
};

// Create a react component
const App = () => {
  const labelText = "Enter name:";
  const buttonText = { text: "Click Me!" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* <button style="background-color: blue; color: white">Submit</button> */}
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
