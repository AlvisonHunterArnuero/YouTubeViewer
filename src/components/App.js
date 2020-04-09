import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], msgNotReady: "", selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("React.js Tutorials 2020");
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    let results = response.data.items
      ? "Please use the search bar below to begin."
      : "NOTE: You've exceeded the daily allowed numbers of requests for the YouTube API. Please try another day.";
    this.setState({
      videos: response.data.items,
      msgNotReady: results,
      selectedVideo: response.data.items[0],
    });
    console.log(this.state.msgNotReady);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SearchBar
            onTermSubmit={this.onTermSubmit}
            quotelimit={this.state.msgNotReady}
          />
        </div>
        <div className="row">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
        <div className="row mp-4 mb-2">
          <hr />
          <VideoDetail video={this.state.selectedVideo} />
        </div>
      </div>
    );
  }
}
export default App;
