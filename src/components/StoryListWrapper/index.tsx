import React, { Component } from "react";
import { StoryIdType } from "../../types/data/items";
import StoryList from "../../containers/StoryList";
import "./index.css";
import { StoryItemType } from "../../types/reducers/user";

type IProps = {
  pages: Array<Array<StoryItemType>>;
};

class StoryListWrapper extends Component<IProps> {
  render() {
    return (
      <div className="storylist-wrapper">
        {this.props.pages.map((i, j) => (
          <StoryList key={j} storyIds={i} />
        ))}
      </div>
    );
  }
}

export default StoryListWrapper;
