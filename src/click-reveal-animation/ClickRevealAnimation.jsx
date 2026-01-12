import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navsData } from "../constant";
import "./index.css";
const ClickRevealAnimation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navsRef = useRef([]);
  const toggleRef = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(navsRef.current, {
      top: 0,
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.1,
    });

    tl.current.to(
      toggleRef.current,
      {
        display: "flex",
        opacity: 1,
        duration: 0.4,
        ease: "power4.inOut",
      },
      "-=0.6"
    );
  }, []);

  const handleClick = () => {
    tl.current.play();
    setIsClicked(true);
  };

  const handleToggleClick = () => {
    tl.current.reverse();
    setIsClicked(false);
  };

  return (
    <>
      <div className="container"></div>
      <div className="navs">
        {navsData.map((nav, index) => {
          const isLast = index === navsData.length - 1;

          return (
            <div
              key={index}
              className={`${nav.navClass} nav`}
              ref={(el) => (navsRef.current[index] = el)}
              onClick={isLast ? handleClick : undefined}
            >
              <div className={`${nav.logoClass} logo`}></div>
              <div className="titles">
                <h1>{nav.title}</h1>
                <p>{nav.subtitle}</p>
              </div>
            </div>
          );
        })}

        <div className="toggle" ref={toggleRef} onClick={handleToggleClick}>
          <button>Show Less</button>
        </div>
      </div>
    </>
  );
};

export default ClickRevealAnimation;
