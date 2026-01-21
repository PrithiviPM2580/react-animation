import { useGSAP } from "@gsap/react";
import { useState } from "react";

const HoverTransition = ({ itemData }) => {
  const [activeImg, setActiveImg] = useState(itemData[0].img);

  useGSAP(() => {});

  const handleTransitionClick = (e) => {};
  return (
    <div className="img-container">
      <div className="text-container">
        {itemData.map((item, index) => (
          <div
            className="text"
            key={index}
            onMouseEnter={() => setActiveImg(item.img)}
            onClick={handleTransitionClick}
          >
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="image-container">
        <div className="img">
          <img src={activeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HoverTransition;
