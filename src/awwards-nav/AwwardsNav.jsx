import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";
import { useState } from "react";

const AwwardsNav = () => {
  const containerRef = useRef(null);
  const tl = useRef(null);
  const [menuOpen, setMenuOpen] = useState("☰");

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
            height: "40vh",
          },
          "<",
        )
        .to(
          "#btn-2, #btn-3, #btn-4, #btn-5",
          {
            opacity: 0,
            pointerEvents: "none",
          },
          "<",
        )
        .to(
          "#btn-1",
          {
            width: "100%",
          },
          "<0.2",
        );
    },
    { scope: containerRef },
  );

  const handleScaleClick = () => {
    tl.current.reversed() ? tl.current.play() : tl.current.reverse();
    setMenuOpen(menuOpen === "☰" ? "✕" : "☰");
  };
  return (
    <div className="container" ref={containerRef}>
      <div className="nav">
        <div className="navs">
          <div className="nav-part">
            <ul>
              <li>Awwards</li>
              <li>Inspiration</li>
              <li>Directory</li>
              <li>Market</li>
            </ul>
          </div>
          <div className="nav-parts">
            <div className="part-1">
              <p>Winners</p>
              <p>Site of the day</p>
              <p>Nominees</p>
            </div>
            <div className="part-2">
              <p>Colections</p>
              <p>Elements</p>
              Resources
            </div>
            <div className="part-3">
              <p>Professionals</p>
              <p>Agencies</p>
              <p>Freelencers</p>
            </div>
            <div className="part-4">
              <p>Jobs</p>
              <p>New Events</p>
              <p>Products</p>
            </div>
          </div>
        </div>
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
                  {index === 0 ? <span>{menuOpen}</span> : null}
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
