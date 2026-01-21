import React from "react";

const ClickTransition = ({ active, handleBack }) => {
  return (
    <div className="img-transition-container">
      <div className="img-transition">
        <div className="img-box">
          <img src={active.img} alt="" />
        </div>
      </div>
      <div className="text-transition">
        <div className="text">
          <p>{active.text}</p>
        </div>
      </div>
      <p className="back-cursor" onClick={handleBack}>
        &larr;
      </p>
    </div>
  );
};

export default ClickTransition;
