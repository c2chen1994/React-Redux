import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], delectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: { q: term }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("from the App!", video);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
