import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./index.css";

const HorizontalScrollSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const targetX = useRef(0);
  const markerRef = useRef(null);

  useGSAP(
    () => {
      const slider = sliderRef.current;
      const markerWrapper = markerRef.current;
      const activeSlide = markerWrapper.querySelector(".active-slide");

      const totalSlides = slider.children[0].children.length; // 10
      let maxScroll = slider.offsetWidth - window.innerWidth;
      const clamp = gsap.utils.clamp(0, maxScroll);

      const moveSlider = gsap.quickTo(slider, "x", {
        duration: 0.8,
        ease: "power4.out",
        overwrite: true,
      });

      const moveMarker = gsap.quickTo(markerWrapper, "x", {
        duration: 0.8,
        ease: "power4.out",
        overwrite: true,
      });

      let markerMaxMove =
        markerWrapper.offsetParent.offsetWidth - markerWrapper.offsetWidth;

      const handleWheel = (e) => {
        targetX.current = clamp(targetX.current + e.deltaY);
        moveSlider(-targetX.current);

        // Move marker-wrapper proportionally
        const progress = maxScroll === 0 ? 0 : targetX.current / maxScroll;
        moveMarker(progress * markerMaxMove);

        // Update active slide number
        const slideWidth = slider.offsetWidth / totalSlides;
        const activeIndex = Math.min(
          totalSlides,
          Math.floor(targetX.current / slideWidth) + 1,
        );
        activeSlide.textContent = `${activeIndex} / ${totalSlides}`;
      };

      const handleResize = () => {
        maxScroll = slider.offsetWidth - window.innerWidth;
        markerMaxMove =
          markerWrapper.offsetParent.offsetWidth - markerWrapper.offsetWidth;
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

      <div className="marker-wrapper" ref={markerRef}>
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
