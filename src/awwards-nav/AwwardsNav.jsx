import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const AwwardsNav = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true, reversed: true })
        .fromTo(
          ".nav",
          {
            height: "80px",
          },
          {
            height: "50vh",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          "#btn-2, #btn-3, #btn-4, #btn-5",
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.5,
          },
          "<",
        )
        .to(
          "#btn-1",
          {
            width: "100%",
            duration: 0.5,
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  const handleScaleClick = () => {
    tl.current.reversed() ? tl.current.play() : tl.current.reverse();
  };
  return (
    <div className="container" ref={containerRef}>
      <div className="nav">
        <div className="navs"></div>
        <div className="btns">
          {["More", "Home", "Nominees", "Directory", "Collection"].map(
            (btnText, index) => {
              return (
                <button
                  key={index}
                  className="btn"
                  id={`btn-${index + 1}`}
                  onClick={index === 0 ? handleScaleClick : undefined}
                >
                  {" "}
                  {index === 0 ? <span>&#9776;</span> : null}
                  {btnText}
                </button>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default AwwardsNav;
