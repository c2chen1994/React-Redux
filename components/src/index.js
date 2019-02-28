import React from "react";
import ReactDOM from "react-dom";
import CommentDatail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDatail author="Sam" />
      <CommentDatail author="Jack" />
      <CommentDatail author="Tony" />
      <CommentDatail author="Tom" />
      <CommentDatail author="Zack" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
