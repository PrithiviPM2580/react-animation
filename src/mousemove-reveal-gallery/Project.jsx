import React from "react";

const Project = ({ index, title, setModal }) => {
  return (
    <div
      className="project"
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2>{title}</h2>
      <p>Design and Development</p>
    </div>
  );
};

export default Project;
