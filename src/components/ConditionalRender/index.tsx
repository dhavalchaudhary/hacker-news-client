import React, { JSXElementConstructor } from "react";

const ConditionalRender = ({
  condition,
  children
}: {
  condition: boolean;
  children: JSX.Element;
  // }) => (condition ? children : <div />);
}) => children;

export default ConditionalRender;
