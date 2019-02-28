import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // three ways to solve "this" issues: arrow function and bind in constructor and arrow in form:
  // constructor() {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  //
  onFormSubmit = event => {
    event.preventDefault(); // donnot submit and refresh
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* onSubmit={(event) => onFormSubmit(event)} */}
          <div>
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
