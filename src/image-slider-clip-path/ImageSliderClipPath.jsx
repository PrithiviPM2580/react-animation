import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";
import { useRef } from "react";
import { useState } from "react";

const ImageSliderClipPath = () => {
  const sliderContentRef = useRef(null);
  const slides = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleWheel = (e) => {
    if (isAnimating) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= slides.current.length) return;

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => setIsAnimating(false),
    });

    tl.to(".prefix, .names, .years", {
      y: `+=${direction > 0 ? -30 : 30}`,
      duration: 2,
    });

    setIsAnimating(true);
  };

  useGSAP(
    () => {
      gsap.set(slides.current, {
        scale: (i) => (i === 0 ? 1 : 2),
      });

      window.addEventListener("wheel", handleWheel);

      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    },
    { scope: sliderContentRef },
  );
  return (
    <>
      <div className="slider-content" ref={sliderContentRef}>
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
            <div>Ether Shift Mode</div>
            <div>Solar Thread</div>
            <div>Quantum Sheen Veil</div>
            <div>Flux Aura</div>
            <div>Echo Nimbus</div>
          </div>
        </div>
        <div className="slide-year">
          <div className="years">
            <div>2020</div>
            <div>2021</div>
            <div>2022</div>
            <div>2023</div>
            <div>2024</div>
          </div>
        </div>
      </div>
      <div className="slider">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="slide"
            key={index}
            id={`slide-${index + 1}`}
            ref={(el) => (slides.current[index] = el)}
          >
            <img
              src={`/images/img${index + 1}.png`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSliderClipPath;
