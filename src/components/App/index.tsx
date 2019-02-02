import React, { Component } from "react";
import Header from "../../containers/Header";
import Filterbar from "../../containers/Filterbar";
import { StoryIdType, CollectionType } from "../../types/data/items";

interface IProps {
  state: any;
  onSaveStory: (id: StoryIdType) => void;
  onDeleteStory: (id: StoryIdType) => void;
  onAddCollection: (id: CollectionType) => void;
  onRemoveCollection: (id: CollectionType) => void;
}

class App extends Component<IProps> {
  render() {
    return (
      <div>
        <Header />
        <Filterbar />
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default App;
