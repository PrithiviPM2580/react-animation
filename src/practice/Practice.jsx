import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./index.css";

const HorizontalScrollSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const targetX = useRef(0);

  useGSAP(
    () => {
      const slider = sliderRef.current;

      // calculate max scroll once
      let maxScroll = slider.offsetWidth - window.innerWidth;

      const clamp = gsap.utils.clamp(0, maxScroll);

      const moveX = gsap.quickTo(slider, "x", {
        duration: 0.8,
        ease: "power4.out",
      });

      const handleWheel = (e) => {
        targetX.current = clamp(targetX.current + e.deltaY);
        moveX(-targetX.current);
      };

      const handleResize = () => {
        maxScroll = slider.offsetWidth - window.innerWidth;
      };

      window.addEventListener("wheel", handleWheel, { passive: true });
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="container" ref={containerRef}>
      <nav>
        <div>Logo</div>
        <div>Menu</div>
      </nav>

      <div className="marker-wrapper">
        <div className="marker">
          <div className="grab"></div>
        </div>
        <div className="active-slide">1 / 10</div>
      </div>

      <div className="slider">
        <div className="slider-wrapper" ref={sliderRef}>
          {[...Array(10)].map((_, index) => {
            const i = (index % 6) + 1;
            return (
              <div className="slide" key={index}>
                <img src={`./images/img${i}.png`} alt={`Slide ${i}`} />
              </div>
            );
          })}
        </div>
      </div>

      <footer>
        <p>PPM 2026 &copy;</p>
        <p>Creative Team</p>
      </footer>
    </div>
  );
};

export default HorizontalScrollSlider;
