import React from "react";
import ReactDOM from "react-dom";
import CommentDatail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDatail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        content="Nice blog post 1"
        avatar={faker.image.avatar()}
      />
      <CommentDatail
        author="Jack"
        timeAgo="Today at 9:25 AM"
        content="Nice blog post 2"
        avatar={faker.image.avatar()}
      />
      <CommentDatail
        author="Tony"
        timeAgo="Yesterday at 2:00 PM"
        content="Nice blog post 3"
        avatar={faker.image.avatar()}
      />
      <CommentDatail
        author="Tom"
        timeAgo="Today at 8:30 PM"
        content="Nice blog post 4"
        avatar={faker.image.avatar()}
      />
      <CommentDatail
        author="Zack"
        timeAgo="Yesterday at 10:50 AM"
        content="Nice blog post 5"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
