import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const ImageSlider = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const inceaseValue = 30;
      const tl = gsap.timeline();

      tl.to(".prefix, .names, .years", {
        y: `${inceaseValue}px`,
        duration: 2,
        ease: "power4.inOut",
      });

      window.addEventListener("wheel", (e) => {
        console.log(e.deltaY);
      });
    },
    { scope: containerRef },
  );
  return (
    <div className="container" ref={containerRef}>
      <div className="slider-content">
        <div className="slide-number">
          <div className="prefix">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className="postfix">
            <span>/</span> 5
          </div>
        </div>
        <div className="slide-name">
          <div className="names">
            <div>Ether Shift mode</div>
            <div>Solar Thread</div>
            <div>Quantum Sheen Veil</div>
            <div>Flux Aura</div>
            <div>Echo Nimbus</div>
          </div>
        </div>
        <div className="slide-year">
          <div className="years">
            <div>2025</div>
            <div>2024</div>
            <div>2023</div>
            <div>2022</div>
            <div>2021</div>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slide" id="slide-1">
          <img src="./images/img1.png" alt="" />
        </div>
        <div className="slide" id="slide-2">
          <img src="./images/img2.png" alt="" />
        </div>
        <div className="slide" id="slide-3">
          <img src="./images/img3.png" alt="" />
        </div>
        <div className="slide" id="slide-4">
          <img src="./images/img4.png" alt="" />
        </div>
        <div className="slide" id="slide-5">
          <img src="./images/img5.png" alt="" />
        </div>
        <div style={{ height: "400vh" }}></div>
      </div>
    </div>
  );
};

export default ImageSlider;
