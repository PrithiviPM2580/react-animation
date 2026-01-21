import HoverTransition from "./HoverTransition";
import ClickTransition from "./ClickTransition";
import { useState, useRef } from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const itemData = [
  { text: "Azure", img: "./images/img1.png" },
  { text: "Euphoria", img: "./images/img2.png" },
  { text: "Serendipity", img: "./images/img3.png" },
  { text: "Luminous", img: "./images/img4.png" },
  { text: "Ephemeral", img: "./images/img5.png" },
];

const ImageTransitionOnClick = () => {
  const [active, setActive] = useState(itemData[0]);
  const containerRef = useRef(null);
  const tl = useRef(null);

  const handleTransition = () => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ defaults: { ease: "power4.inOut" } })
        .to(".text-container .text p", {
          y: 100,
        })
        .to(
          ".image-container .img",
          {
            clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)",
            duration: 1.5,
          },
          "<",
        )
        .set(".img-transition-container", {
          zIndex: 10,
          opacity: 1,
        })
        .to(".img-transition-container .img-box", {
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
          duration: 1.5,
        })
        .set(".text-transition .text p", {
          y: -100,
        })
        .to(".text-transition .text p", {
          y: 0,
          duration: 1,
        });
    }, containerRef);

    return () => ctx.revert();
  };

  const handleBack = () => {};
  return (
    <div className="container" ref={containerRef}>
      <nav>
        <div className="logo">PPM</div>
        <div className="menu">Menu</div>
      </nav>
      <HoverTransition
        itemData={itemData}
        active={active}
        setActive={setActive}
        handleTransition={handleTransition}
      />
      <ClickTransition active={active} handleBack={handleBack} />
    </div>
  );
};

export default ImageTransitionOnClick;
