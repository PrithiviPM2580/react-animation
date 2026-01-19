import "./index.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function RevealLoader() {
  const [count, setCount] = useState(0);
  const tlRef = useRef(null);
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const headerRef = useRef(null);
  // GSAP timeline (created once)
  useGSAP(
    () => {
      tlRef.current = gsap.timeline({ paused: true });

      tlRef.current
        .to(".counter", { opacity: 0, duration: 0.25 })
        .to(".bar", {
          height: 0,
          duration: 2,
          stagger: 0.5,
          ease: "power4.inOut",
        })
        .from(
          ".h1",
          {
            y: 700,
            duration: 1.5,
            stagger: 0.5,
            ease: "power4.inOut",
          },
          "-=1.5",
        )
        .from(
          ".hero",
          {
            y: 400,
            duration: 1,
            ease: "power4.inOut",
          },
          "-=1",
        );
    },
    { scope: overlayRef, counterRef, headerRef },
  );

  // Loader logic
  useEffect(() => {
    if (count === 100) {
      tlRef.current.play(); // trigger GSAP when loader ends
      return;
    }

    const increment =
      count < 70
        ? Math.floor(Math.random() * 10) + 1
        : Math.floor(Math.random() * 3) + 1;

    const delay = count < 70 ? 80 : 150;

    const timer = setTimeout(() => {
      setCount((prev) => Math.min(prev + increment, 100));
    }, delay);

    return () => clearTimeout(timer);
  }, [count]);
  return (
    <>
      <div className="counter" ref={counterRef}>
        {count}
      </div>

      <div className="overlay" ref={overlayRef}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="container">
        <nav className="navs">
          <div className="logo">Logo</div>
          <div className="name">PPM</div>
          <div className="link">
            <p>Home</p>
            <p>Shop</p>
            <p>Contact</p>
          </div>
        </nav>

        <div className="header" ref={headerRef}>
          <div className="h1">f</div>
          <div className="h1">l</div>
          <div className="h1">a</div>
          <div className="h1">u</div>
          <div className="h1">.</div>
        </div>

        <div className="hero">
          <img src="../images/img5.png" alt="" />
        </div>
      </div>
    </>
  );
}
