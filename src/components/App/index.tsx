import React, { Component } from "react";
import Header from "../../containers/Header";
import Filterbar from "../../containers/Filterbar";
import { StoryIdType, CollectionIdType } from "../../types/data/items";
import StoryListWrapper from "../../containers/StoryListWrapper";
import Post from "../Post";

interface IProps {
  loadMoreValid: boolean;
  onAddCollection: (id: CollectionIdType) => void;
  onRemoveCollection: (id: CollectionIdType) => void;
  fetchMoreStories: () => void;
}

class App extends Component<IProps> {
  render() {
    return (
      <div>
        <Header />
        <Filterbar />
        <StoryListWrapper />
        {this.props.loadMoreValid && (
          <button onClick={this.props.fetchMoreStories}>Load More</button>
        )}
      </div>
    );
  }
}

export default App;
