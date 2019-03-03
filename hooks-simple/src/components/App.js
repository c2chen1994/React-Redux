import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  //state = { resource: "posts" };
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
