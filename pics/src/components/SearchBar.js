import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div>
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
            <input
              type="text"
              onChange={e => console.log(event.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
