import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne<Link to="/pagetwo">to page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo<button>Click Me</button>
      <Link to="/">to page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
