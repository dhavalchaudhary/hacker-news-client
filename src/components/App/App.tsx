import React, { Component } from "react";
import { StoryIdType, CollectionType } from "../../types/data/items";

interface IProps {
  state: any;
  onSaveStory: (id: StoryIdType) => void;
  onDeleteStory: (id: StoryIdType) => void;
  onAddCollection: (id: CollectionType) => void;
  onRemoveCollection: (id: CollectionType) => void;
}

class App extends Component<IProps> {
  componentDidMount() {
    this.props.onSaveStory("1");
    this.props.onSaveStory("2");
    this.props.onSaveStory("3");
    this.props.onSaveStory("4");
    this.props.onDeleteStory("3");
    this.props.onAddCollection("top");
    this.props.onAddCollection("best");
    this.props.onAddCollection("jobs");
    this.props.onRemoveCollection("best");
  }
  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

export default App;
