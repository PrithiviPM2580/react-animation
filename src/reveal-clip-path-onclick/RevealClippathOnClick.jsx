import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const RevealClippathOnClick = () => {
  const tl = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          paused: true,
          defaults: { ease: "power4.inOut" },
        })
        .to(overlayRef.current, {
          clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
          duration: 2,
        })
        .to(
          ".img",
          {
            clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
            duration: 1,
            stagger: { amount: 1.5 },
          },
          "-=1.4",
        )
        .to(
          ".loader",
          { clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)", duration: 1 },
          "-=0.7",
        );
    },
    { scope: containerRef },
  );

  const handleAnimationClick = () => {
    tl.current.play();
  };
  return (
    <>
      <div className="container" ref={containerRef}>
        <nav>
          <div className="logo">PPM</div>
          <div className="navs">
            <p>Home</p>
            <p>Shop</p>
            <p>Cart</p>
          </div>
        </nav>
        <h1>Welcome to PPM</h1>
        <div className="loader">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="img" key={index}>
              <img
                src={`../images/img${index + 1}.png`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overlay" ref={overlayRef}>
        <button onClick={handleAnimationClick}>Click Anywhere</button>
      </div>
    </>
  );
};

export default RevealClippathOnClick;
