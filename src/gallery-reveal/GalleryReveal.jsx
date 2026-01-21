import { useState } from "react";
import "./index.css";

const data = [
  { id: 1, title: "Image 1", imgSrc: "./images/img1.png" },
  { id: 2, title: "Image 2", imgSrc: "./images/img2.png" },
  { id: 3, title: "Image 3", imgSrc: "./images/img3.png" },
  { id: 4, title: "Image 4", imgSrc: "./images/img4.png" },
  { id: 5, title: "Image 5", imgSrc: "./images/img5.png" },
  { id: 6, title: "Image 6", imgSrc: "./images/img6.png" },
];

const GalleryReveal = () => {
  const [activeData, setActiveData] = useState(data[0]);
  return (
    <div className="container">
      <div className="gallery">
        <h1>Drive / Moment</h1>
        <div className="gallery-box">
          {Array.from({ length: 30 }).map((_, index) => {
            const imgIndex = (index % 6) + 1;

            return (
              <div className="gallery-item" key={index}>
                <div className="img">
                  <img
                    src={`./images/img${imgIndex}.png`}
                    alt={`Image ${imgIndex}`}
                  />
                </div>
                <p>{`Image ${imgIndex}`}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="revealer">
        <div className="name">{activeData.title}</div>
        <div className="revealer-img">
          <div className="img">
            <img src={activeData.imgSrc} alt={activeData.title} />
          </div>
        </div>
        <p className="close">Close</p>
      </div>
    </div>
  );
};

export default GalleryReveal;
