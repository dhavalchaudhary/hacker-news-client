import React from "react";
import "./index.css";
import ConditionalRender from "../ConditionalRender";
import { ArrowDropUp, ModeCommentTwoTone } from "@material-ui/icons";
import { unix } from "moment";

const HACKER_NEWS_ROOT_URL = "https://news.ycombinator.com";

const Story = ({ data }: { data: any }) => {
  const postUrl = `${HACKER_NEWS_ROOT_URL}/item?id=${data.id}`;
  return (
    <div className="story-card">
      <div className="story-upvotes">
        <div className="story-icon">
          <ArrowDropUp />
        </div>
        <p className="story-score">{data.score}</p>
      </div>
      <div className="story-info-wrapper">
        <div className="story-row story-info story-header">
          <div className="story-info-el-wrapper">
            <p className="story-info-el story-info-collection-type">
              {data.collection}
            </p>
          </div>
          <span className="story-info-divider">•</span>
          <div className="story-info-el-wrapper">
            <p className="story-info-el">Posted by </p>
            <a
              href={`${HACKER_NEWS_ROOT_URL}/user?id=${data.by}`}
              target="_blank"
              className="story-info-el story-info-links"
            >
              {` ${data.by}`}
            </a>
          </div>
          <div className="story-info-el-wrapper">
            <a
              href={postUrl}
              target="_blank"
              className="story-info-el story-info-links"
            >{`${unix(data.time).fromNow()} ago`}</a>
          </div>
        </div>
        <div className="story-title-wrapper">
          <a
            href={data.url}
            target="_blank"
            className="story-row story-title"
          >{`${data.title}`}</a>
        </div>
        <div className="story-row story-info">
          <ConditionalRender
            condition={data && data.descendants && data.descendants > 0}
          >
            <a
              href={postUrl}
              target="_blank"
              className="story-info-el story-info-links story-comments-wrapper"
            >
              <div className="story-icon">
                <ModeCommentTwoTone />
              </div>
              <div className="story-comment">{`${
                data.descendants
              } Comments`}</div>
            </a>
          </ConditionalRender>
        </div>
      </div>
    </div>
  );
};

export default Story;
