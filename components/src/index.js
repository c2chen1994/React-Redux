import React from "react";
import ReactDOM from "react-dom";
import CommentDatail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./AprrovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure???
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDatail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          content="Nice blog post 1"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDatail
          author="Jack"
          timeAgo="Today at 9:25 AM"
          content="Nice blog post 2"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDatail
          author="Tony"
          timeAgo="Yesterday at 2:00 PM"
          content="Nice blog post 3"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDatail
          author="Tom"
          timeAgo="Today at 8:30 PM"
          content="Nice blog post 4"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDatail
          author="Zack"
          timeAgo="Yesterday at 10:50 AM"
          content="Nice blog post 5"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
