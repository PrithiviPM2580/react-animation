import React from "react";

const ClickTransition = ({ itemData }) => {
  return (
    <div className="img-transition-container">
      <div className="img-transition">
        <div className="img-box">
          <img src="./images/img1.png" alt="" />
        </div>
      </div>
      <div className="text-transition">
        <div className="text">
          <p>Azure</p>
        </div>
      </div>
    </div>
  );
};

export default ClickTransition;
