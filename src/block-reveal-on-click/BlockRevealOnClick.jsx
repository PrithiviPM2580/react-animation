import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./index.css";

export default function App() {
  const overlayRef = useRef(null);
  const squareContainerRef = useRef(null);
  const squaresRef = useRef([]);
  const tlRef = useRef(null);

  const [overlayVisible, setOverlayVisible] = useState(false);

  const squareSize = 100;

  useEffect(() => {
    gsap.set(overlayRef.current, {
      opacity: 0,
      visibility: "hidden",
      zIndex: -1,
    });
  }, []);

  const createSquares = () => {
    const cols = Math.ceil(window.innerWidth / squareSize);
    const rows = Math.ceil(window.innerHeight / squareSize);
    const total = cols * rows;

    if (squaresRef.current.length === total) return;

    squaresRef.current = [];
    squareContainerRef.current.innerHTML = "";

    for (let i = 0; i < total; i++) {
      const square = document.createElement("div");
      square.className = "square";
      squareContainerRef.current.appendChild(square);
      squaresRef.current.push(square);
    }
  };

  const animateSquares = (show) => {
    if (tlRef.current) tlRef.current.kill();

    gsap.set(squaresRef.current, { opacity: 0 });

    tlRef.current = gsap
      .timeline()
      .to(squaresRef.current, {
        opacity: 1,
        duration: 0.15,
        stagger: { each: 0.004, from: "random" },
      })
      .to(squaresRef.current, {
        opacity: 0,
        duration: 0.15,
        stagger: { each: 0.004, from: "random" },
      })
      .to(overlayRef.current, {
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        zIndex: show ? 0 : -1,
        duration: 0.2,
      });
  };

  const handleToggle = () => {
    createSquares();
    animateSquares(!overlayVisible);
    setOverlayVisible((prev) => !prev);
  };

  return (
    <>
      <div className="toggle" onClick={handleToggle}>
        <div>&#9776;</div>
      </div>

      <div className="nav">
        <p className="logo">Logo</p>
        <div className="navs">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
        </div>
      </div>

      <div className="content">
        <h1>
          We <br />
          Help <br />
          brands <br />
          explor <br />
          vibes
        </h1>
      </div>

      <div className="overlay" ref={overlayRef}>
        <div className="h1">Work With us</div>
        <div className="menus">
          <div className="menu-nav">
            <p>(01)</p>
            <p>Contact</p>
          </div>
          <div className="menu-nav">
            <p>(02)</p>
            <p>Portfolio</p>
          </div>
          <div className="menu-nav">
            <p>(03)</p>
            <p>About Us</p>
          </div>
          <div className="menu-nav">
            <p>(04)</p>
            <p>Services</p>
          </div>
        </div>
      </div>

      <div className="square-container" ref={squareContainerRef}></div>
    </>
  );
}
