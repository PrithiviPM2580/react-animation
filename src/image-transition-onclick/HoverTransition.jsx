import { useState } from "react";

const itemData = [
  { text: "Azure", img: "./images/img1.png" },
  { text: "Euphoria", img: "./images/img2.png" },
  { text: "Serendipity", img: "./images/img3.png" },
  { text: "Luminous", img: "./images/img4.png" },
  { text: "Ephemeral", img: "./images/img5.png" },
];
const HoverTransition = () => {
  const [activeImg, setActiveImg] = useState(itemData[0].img);
  return (
    <div className="img-container">
      <div className="text-container">
        {itemData.map((item, index) => (
          <div
            className="text"
            key={index}
            onMouseEnter={() => setActiveImg(item.img)}
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
