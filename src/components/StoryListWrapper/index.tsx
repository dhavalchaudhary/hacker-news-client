import React, { Component } from "react";
import { StoryIdType } from "../../types/data/items";
import StoryList from "../../containers/StoryList";

type IProps = {
  pages: Array<Array<StoryIdType>>;
};

class StoryListWrapper extends Component<IProps> {
  render() {
    return (
      <div>
        {this.props.pages.map((i, j) => (
          <StoryList key={j} storyIds={i} />
        ))}
      </div>
    );
  }
}

export default StoryListWrapper;
