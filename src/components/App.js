import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("React.js Tutorials 2019");
  }
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </div>
        <div className="row">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
        <div className="row mp-4 mb-2">
        <hr/>
          <VideoDetail video={this.state.selectedVideo} />
        </div>
      </div>
    );
  }
}
export default App;
