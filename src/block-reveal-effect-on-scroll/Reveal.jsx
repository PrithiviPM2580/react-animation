import React from "react";
import useReveal from "./useReveal";
import "./index.css";

const Reveal = ({ children, threshold }) => {
  const { revealRef, reveal } = useReveal(threshold);
  return React.cloneElement(children, {
    ref: revealRef,
    className: `${reveal ? "reveal" : ""} ${children.props.className}`,
  });
};

export default Reveal;
