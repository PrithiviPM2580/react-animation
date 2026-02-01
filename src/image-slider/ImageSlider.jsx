import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "./index.css";

const ImageSlider = () => {
  const containerRef = useRef(null);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);

  const totalSlides = 5;
  const step = 30;

  const handleWheelScroll = (direction) => {
    if (isAnimating.current) return;

    const nextIndex =
      direction > 0
        ? Math.min(currentIndex.current + 1, totalSlides - 1)
        : Math.max(currentIndex.current - 1, 0);

    if (nextIndex === currentIndex.current) return;

    isAnimating.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        currentIndex.current = nextIndex;
        isAnimating.current = false;
      },
    });

    // TEXT SCROLL
    tl.to(".prefix, .names, .years", {
      y: `+=${direction > 0 ? -step : step}`,
      duration: 1,
    });

    // IMAGE REVEAL (bottom → top)
    tl.fromTo(
      `#slide-${nextIndex + 1}`,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.2,
      },
      "<",
    );
  };

  useGSAP(
    () => {
      const onWheel = (e) => {
        handleWheelScroll(e.deltaY);
      };

      window.addEventListener("wheel", onWheel);
      return () => window.removeEventListener("wheel", onWheel);
    },
    { scope: containerRef },
  );

  return (
    <div className="container" ref={containerRef}>
      {/* TEXT CONTENT */}
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
            <span>/</span>5
          </div>
        </div>

        <div className="slide-name">
          <div className="names">
            <div>Ether Shift Mode</div>
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

      {/* SLIDES */}
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
      </div>
    </div>
  );
};

export default ImageSlider;
