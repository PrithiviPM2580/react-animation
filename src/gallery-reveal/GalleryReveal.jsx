import { useState } from "react";
import "./index.css";
import { galleryData } from "../constant";
import { useRef } from "react";
import gsap from "gsap";

const GalleryReveal = () => {
  const [activeData, setActiveData] = useState(galleryData[0]);
  const tl = useRef(null);
  const revealerRef = useRef(null);

  const handleTransitionClick = (item) => {
    setActiveData(item);
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ defaults: { ease: "power4.inOut" } })
        .to(revealerRef.current, {
          top: "0%",
          duration: 1.5,
        })
        .to(".revealer .img", {
          clipPath: "polygon(0 0,100% 0, 100% 100%,0 100%)",
        });
    }, revealerRef);

    return () => ctx.revert();
  };

  const handleClose = () => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ defaults: { ease: "power4.inOut" } })
        .to(".revealer .img", {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          duration: 1.5,
        })
        .to(revealerRef.current, {
          top: "100%",
          duration: 3,
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
        <div className="img">
          <img src={activeData.imgSrc} alt={activeData.title} />
        </div>
        <p className="close" onClick={handleClose}>
          Close
        </p>
      </div>
    </div>
  );
};

export default GalleryReveal;
