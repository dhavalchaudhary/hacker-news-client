import React from "react";

const Post = ({ data }: { data: any }) => {
  // console.log(data);
  return (
    <div>
      <div>{`${data.title}`}</div>
      <div>{`Authored by - ${data.by}`}</div>
      <a href={`https://news.ycombinator.com/item?id=${data.id}`}>{`${
        data.descendants
      } Comments`}</a>
    </div>
  );
};

export default Post;
