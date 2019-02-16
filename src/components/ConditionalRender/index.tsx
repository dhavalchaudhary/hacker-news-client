import React from "react";

const ConditionalRender = ({
  condition,
  children
}: {
  condition: boolean;
  children: JSX.Element;
  // }) => (condition ? children : <div />);
}) => {
  return condition ? children : null;
};

export default ConditionalRender;
