import { useState } from "react";
import "./index.css";
import { galleryData } from "../constant";
import { useRef } from "react";
import gsap from "gsap";

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
  const tl = useRef(null);
  const revealerRef = useRef(null);

  const handleTransitionClick = (item) => {
    setActiveData(item);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ defaults: { ease: "power4.inOut" } })
        .to(".revealer", {
          yPercent: 0,
          duration: 1.5,
        });
    }, revealerRef);

    return () => ctx.revert();
  };
  return (
    <div className="container">
      <div className="gallery">
        <h1>Drive / Moment</h1>
        <div className="gallery-box">
          {galleryData.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => handleTransitionClick(item)}
            >
              <div className="img">
                <img src={item.imgSrc} alt={`Image ${item.id}`} />
              </div>
              <p>{`Image ${item.title}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="revealer" ref={revealerRef}>
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
