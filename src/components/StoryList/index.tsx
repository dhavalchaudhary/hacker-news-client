import React, { Component } from "react";
import Story from "../Story";
import "./index.css";
import { StoryItemType } from "../../types/reducers/user";
import LoadingIcon from "../LoadingIcon";

type IProps = {
  storyIds: Array<StoryItemType>;
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
        {this.props.isLoading && <LoadingIcon />}
        {this.props.isError && "Error"}
        {!this.props.isLoading &&
          !this.props.isError &&
          this.generateStoryList()}
      </div>
    );
  }
}

export default StoryList;
