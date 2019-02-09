import React, { Component } from "react";
import Header from "../../containers/Header";
import Filterbar from "../../containers/Filterbar";
import StoryListWrapper from "../../containers/StoryListWrapper";
import "./index.css";

interface IProps {
  loadMoreValid: boolean;
  fetchMoreStories: () => void;
}

class App extends Component<IProps> {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Filterbar />
        <StoryListWrapper />
        {this.props.loadMoreValid && (
          <button
            className="load-more-btn"
            onClick={this.props.fetchMoreStories}
          >
            Load More
          </button>
        )}
      </div>
    );
  }
}

export default App;
