import React from "react";
import { useState } from "react";

const textData = [
  "Azure",
  "Euphoria",
  "Serendipity",
  "Luminous",
  "Ephemeral",
  "Solitude",
];

const HoverTransition = () => {
  const [activeImg, setActiveImg] = useState();
  return (
    <div className="img-container">
      <div className="text-container">
        {textData.map((text, index) => (
          <div className="text" key={index}>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className="image-container">
        <div className="img">
          <img src="./images/img1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HoverTransition;
