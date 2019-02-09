import React, { Component } from "react";
import Header from "../../containers/Header";
import Filterbar from "../../containers/Filterbar";
import StoryListWrapper from "../../containers/StoryListWrapper";
import "./index.css";
import { ThemeType } from "../../types/data/ui";

interface IProps {
  loadMoreValid: boolean;
  theme: ThemeType;
  fetchMoreStories: () => void;
}

class App extends Component<IProps> {
  render() {
    return (
      <div className={`app-wrapper ${this.props.theme}-mode`}>
        <div className="app">
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
      </div>
    );
  }
}

export default App;
