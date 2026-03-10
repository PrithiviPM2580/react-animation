import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.css";

const HorizontalSccrollImageSlider = () => {
  const sliderWrapperRef = useRef(null);
  const slideRefs = useRef([]);
  const current = useRef(0);
  const target = useRef(0);

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  useEffect(() => {
    const wrapper = sliderWrapperRef.current;
    if (!wrapper) return;

    let rafId = 0;
    let maxScroll = Math.max(0, wrapper.scrollWidth - window.innerWidth);

    const updatePosition = () => {
      slideRefs.current.forEach((slide) => {
        if (!slide) return;

        const rect = slide.getBoundingClientRect();
        const centerPosition = (rect.left + rect.right) / 2;
        const distanceFromCenter = centerPosition - window.innerWidth / 2;

        let offset;
        let scale;

        if (distanceFromCenter > 0) {
          scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
          offset = (scale - 1) * 300;
        } else {
          scale = Math.max(
            0.5,
            1 - Math.abs(distanceFromCenter) / window.innerWidth,
          );
          offset = 0;
        }

        gsap.set(slide, { scale, x: offset });
      });
    };

    const update = () => {
      current.current = lerp(current.current, target.current, 0.1);
      gsap.set(wrapper, { x: -current.current });
      updatePosition();
      rafId = requestAnimationFrame(update);
    };

    const onWheel = (e) => {
      target.current += e.deltaY;
      target.current = Math.max(0, Math.min(target.current, maxScroll));
    };

    const onResize = () => {
      maxScroll = Math.max(0, wrapper.scrollWidth - window.innerWidth);
      target.current = Math.max(0, Math.min(target.current, maxScroll));
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("resize", onResize);
    update();

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="container">
      <div className="nav">
        <p>PPM</p>
        <p>Menu</p>
      </div>
      <div className="footer">
        <p>Creative Coding</p>
        <p>Threejs</p>
      </div>
      <div className="slider">
        <div className="slider-wrapper" ref={sliderWrapperRef}>
          {Array.from({ length: 15 }).map((_, i) => {
            const index = (i % 6) + 1;
            return (
              <div
                className="slide"
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
              >
                <img src={`/images/img${index}.png`} alt={`Image ${index}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSccrollImageSlider;
