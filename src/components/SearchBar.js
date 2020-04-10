import React from "react";

class SearchBar extends React.Component {
  state = { term: "", quotelimit: "" };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
      quotelimit: this.props.quotelimit,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    console.log(this.props.quotelimit);
    return (
      <div className="jumbotron col-lg-12">
        <h1 className="display-4">Yet another YouTube Search Tool </h1>
        <p className="lead">
          This is a simple app based on a practice project for a
          <b className="text-muted">Stephen Grider Udemy course</b> I am
          currently taking based on The React library and that is called
          <b className="text-primary">
            React.js - The Complete Guide (including Hooks, React Router,
            Redux).
          </b>
          This was initially intended to be layed out using the
          <b className="text-muted"> Semantic UI library</b> but I decided to
          use <b className="text-muted"> Bootstrap 4 </b>instead since I feel
          more confortable working with it. I've proceeded to change the
          original look and feel as well as its layout to my own version.
        </p>

        <p className="text-muted h5">{this.props.quotelimit} </p>

        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
              placeholder="Type your search term here..."
              className="mt-2 form-control form-control-lg"
            />
            <input
              type="submit"
              className="mt-2 btn text-white bg-primary"
              value="Fetch It!"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
