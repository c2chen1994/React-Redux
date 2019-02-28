import React from "react";
import ReactDOM from "react-dom";
import CommentDatail from "./CommentDetail";
const comments = () => {
  return <div className="ui container comments">{comment}</div>;
};

const comment = () => {};

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDatail />
      <CommentDatail />
      <CommentDatail />
      <CommentDatail />
      <CommentDatail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
