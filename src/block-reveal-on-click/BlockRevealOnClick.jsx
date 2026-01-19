import { useRef, useEffect, useState } from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SQUARE_SIZE = 100;

const BlockRevealOnClick = () => {
  const squareContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const squaresRef = useRef([]);
  const tlRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    createSquares();
  }, []);

  useGSAP(
    () => {
      const squares = squareContainerRef.current?.querySelectorAll(".square");
      if (!squares || !squares.length) return;

      tlRef.current?.kill();

      gsap.set(squares, {
        opacity: 0,
      });

      tlRef.current = gsap.timeline({ paused: true });

      tlRef.current
        .to(squares, {
          opacity: 1,
          duration: 0.15,
          stagger: { each: 0.004, from: "random" },
        })
        .to(squares, {
          opacity: 0,
          duration: 0.15,
          stagger: { each: 0.004, from: "random" },
        });

      gsap.to(overlayRef.current, {
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        zIndex: visible ? 0 : -1,
        duration: 0.2,
      });
    },
    { scope: squareContainerRef, dependencies: [visible] },
  );

  const createSquares = () => {
    const cols = Math.ceil(window.innerWidth / SQUARE_SIZE);
    const rows = Math.ceil(window.innerHeight / SQUARE_SIZE);
    const totalSquares = cols * rows;
    squaresRef.current = Array.from({ length: totalSquares });
  };

  const handleReveal = () => {
    if (!tlRef.current) {
      const squares = squareContainerRef.current?.querySelectorAll(".square");
      if (!squares || !squares.length) return;

      gsap.set(squares, { opacity: 0 });
      tlRef.current = gsap.timeline({ paused: true });

      tlRef.current
        .to(squares, {
          opacity: 1,
          duration: 0.15,
          stagger: { each: 0.004, from: "random" },
        })
        .to(squares, {
          opacity: 0,
          duration: 0.15,
          stagger: { each: 0.004, from: "random" },
        });
    }

    tlRef.current.play();
    setVisible((prev) => !prev);

    gsap.to(overlayRef.current, {
      opacity: visible ? 0 : 1,
      visibility: visible ? "hidden" : "visible",
      zIndex: visible ? -1 : 0,
      duration: 0.2,
    });
  };
  return (
    <>
      <button className="toggle" onClick={handleReveal}>
        <span>&#9776;</span>
      </button>

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

      <div className="square-container" ref={squareContainerRef}>
        {squaresRef.current.map((_, index) => {
          return <div className="square" key={index}></div>;
        })}
      </div>
    </>
  );
};

export default BlockRevealOnClick;
