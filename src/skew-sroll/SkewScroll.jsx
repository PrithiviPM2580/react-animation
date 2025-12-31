import { useEffect, useRef } from "react";
import { scrollSkew } from "../constant";
import "./index.css";

const SkewScroll = () => {
  const containerRef = useRef(null);
  const lastScrollY = useRef(window.pageYOffset);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let rafId;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const diff = currentScrollY - lastScrollY.current;

      const skew = diff * 0.2;
      container.style.transform = `skewY(${skew}deg)`;

      lastScrollY.current = currentScrollY;
      rafId = requestAnimationFrame(handleScroll);
    };
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="scroll-wrapper">
      <div className="container" ref={containerRef}>
        {scrollSkew.map((item, index) => (
          <div className="content" key={index}>
            <img src={item.img} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkewScroll;
