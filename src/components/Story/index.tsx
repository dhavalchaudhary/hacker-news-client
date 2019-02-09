import React from "react";
import "./index.css";
import ConditionalRender from "../ConditionalRender";
import { ArrowDropUp } from "@material-ui/icons";

const Story = ({ data }: { data: any }) => {
  return (
    <div className="story-card">
      <div className="story-upvotes">
        <ArrowDropUp />
        <p className="story-score">{data.score}</p>
      </div>
      <div className="story-info-wrapper">
        <div className="story-row story-title">{`${data.title}`}</div>
        <div className="story-row story-info">
          <div>{`by - ${data.by}`}</div>
          <ConditionalRender
            condition={data.descendants && data.descendants.length > 0}
          >
            <a href={`https://news.ycombinator.com/item?id=${data.id}`}>{`${
              data.descendants
            } Comments`}</a>
          </ConditionalRender>
        </div>
      </div>
    </div>
  );
};

export default Story;
