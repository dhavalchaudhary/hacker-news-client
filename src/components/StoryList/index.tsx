import React, { Component, ReactElement } from "react";
import { StoryIdType } from "../../types/data/items";
import Story from "../Story";
import "./index.css";
type IProps = {
  storyIds: Array<StoryIdType>;
  isLoading: boolean;
  isError: boolean;
  data: Array<any>;
};

class StoryList extends Component<IProps> {
  generateStoryList = () => {
    let rows: Array<JSX.Element> = [];
    this.props.data.forEach(i => rows.push(<Story key={i.id} data={i} />));
    return rows;
  };
  render() {
    return (
      <div className="storylist">
        {this.props.isLoading && "Loading"}
        {this.props.isError && "Error"}
        {!this.props.isLoading &&
          !this.props.isError &&
          this.generateStoryList()}
      </div>
    );
  }
}

export default StoryList;