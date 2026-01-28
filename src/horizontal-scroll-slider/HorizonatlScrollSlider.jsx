import gsap from "gsap";
import "./index.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HorizonatlScrollSlider = () => {
  const containerRef = useRef(null);
  const currentX = useRef(0);
  const targetX = useRef(0);
  const sliderRef = useRef(null);
  const maxScrollRef = useRef(0);
  const horizontaLScrollXRef = useRef(null);

  const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end;
  };

  function update() {
    currentX.current = lerp(currentX.current, targetX.current, 0.1);
    if (horizontaLScrollXRef.current) {
      horizontaLScrollXRef.current(-currentX.current);
    }

    requestAnimationFrame(update);
  }

  function handleWheel(e) {
    targetX.current += e.deltaY;

    targetX.current = Math.max(0, targetX.current);
    targetX.current = Math.min(maxScrollRef.current, targetX.current);
  }

  function handleResize() {
    if (maxScrollRef.current) {
      maxScrollRef.current = sliderRef.current.offsetWidth - window.innerWidth;
    }
  }
  requestAnimationFrame(update);

  useGSAP(
    () => {
      if (sliderRef.current) {
        maxScrollRef.current =
          sliderRef.current.offsetWidth - window.innerWidth;
        horizontaLScrollXRef.current = gsap.quickTo(sliderRef.current, "x");
      }
      window.addEventListener("wheel", (e) => handleWheel(e));
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("wheel", (e) => handleWheel(e));
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
        <div className="active-slide">1/10</div>
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

export default HorizonatlScrollSlider;
