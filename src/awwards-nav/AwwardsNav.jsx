import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const AwwardsNav = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true }).to(".nav", {
        height: "50vh",
      });
    },
    { scope: containerRef },
  );

  const handleScaleClick = () => {
    console.log("clicked");
    tl.current.reversed(!tl.current.reversed());
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
