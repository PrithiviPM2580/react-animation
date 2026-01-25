import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SliderImageOnScroll = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".slider",
          start: "top top",
          end: () => `+=${window.innerHeight * (slidesRef.current.length - 1)}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      slidesRef.current.forEach((slide, index) => {
        if (index > 0) {
          tl.to(slide, { scale: 1, ease: "sine", duration: 1 }, index - 1);
        }
      });
    },
    { scope: containerRef },
  );
  return (
    <div className="container" ref={containerRef}>
      <div className="nav">
        <div className="logo">PPM</div>
        <div className="menu">Menu</div>
      </div>
      <div className="footer">
        <p>Design by PPM</p>
        <p>Future Projects</p>
      </div>

      <div className="slider">
        {[...Array(6)].map((_, index) => (
          <div
            className="slide"
            id={`slide-${index + 1}`}
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <div className="img">
              <img
                src={`./images/img${index + 1}.png`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderImageOnScroll;
