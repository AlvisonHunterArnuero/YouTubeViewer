import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui inverted black segment">
        <form onSubmit={this.onFormSubmit} className="ui fluid form">
          <div className="field">
            <h3>Welcome to our YouTube Search Tool</h3>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
