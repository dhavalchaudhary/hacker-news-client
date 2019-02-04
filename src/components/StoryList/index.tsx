import React, { Component, ReactElement } from "react";
import { StoryIdType } from "../../types/data/items";
import Post from "../Post";

type IProps = {
  storyIds: Array<StoryIdType>;
  isLoading: boolean;
  isError: boolean;
  data: Array<any>;
};

class StoryList extends Component<IProps> {
  render() {
    return (
      <React.Fragment>
        {this.props.isLoading && "Loading"}
        {this.props.isError && "Error"}
        {!this.props.isLoading &&
          !this.props.isError &&
          this.props.data.map(i => <Post key={i.id} data={i} />)}
      </React.Fragment>
    );
  }
}

export default StoryList;
