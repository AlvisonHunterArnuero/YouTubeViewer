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
<div className="jumbotron col-lg-12">
  <h1 className="display-4">Yet another YouTube Search Tool </h1>
  <p className="lead">This is a simple app based on a practice project for a <b>Stephen Grider Udemy course</b> I am currently taking based on The
  React library and that is called <b className="text-primary"> React.js - The Complete Guide (including Hooks, React Router, Redux).</b> This was initially intended to be layed out using the Semantic UI library but I decided to use Bootstrap 4 instead since 
  I feel more confortable working with it. I also changed the look and feel as well as the layout of the original version.</p>
  <small className="text-dark">NOTE: If you don't see any rendering on the screen is because my YouTube API key gets expired every certain limit, hence I shall have to change it regulary.</small>

  <form onSubmit={this.onFormSubmit}>
  <div className="form-group">
  <input type="text" onChange={this.onInputChange} value={this.state.term} placeholder="Type your search term here..." className="mt-2 form-control form-control-lg"/>
  <input type="submit" className="mt-2 btn text-white bg-primary" value="Fetch It!" />
  </div>
</form>
</div>
    );
  }
}
export default SearchBar;
