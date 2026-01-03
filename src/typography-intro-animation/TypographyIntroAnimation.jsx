import { useGSAP } from "@gsap/react";
import { TYPOGRAPHTY_INTRO_ANIMATION_TEXTS } from "../constant";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const TypographyIntroAnimation = () => {
  const tlRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef) return;

      tlRef.current = gsap
        .timeline({ paused: true })

        .to(".btn", {
          opacity: 0,
          y: -40,
          ease: "expo.inOut",
          duration: 1,
        })
        .to(
          ".text",
          {
            x: 500,
            ease: "expo.inOut",
            stagger: 0.05,
            duration: 2,
          },
          "-=1.1"
        )
        .to(
          ".text-wrapper",
          {
            y: -600,
            scale: 3.5,
            rotate: -90,
            ease: "expo.inOut",
            duration: 2,
          },
          "-=1.5"
        )
        .to(
          ".text h1",
          {
            opacity: 1,
            ease: "expo.inOut",
            duration: 1,
          },
          "-=1"
        )
        .to(".text", {
          x: -1500,
          duration: 2,
          ease: "expo.inOut",
          stagger: 0.05,
        })
        .to(
          ".header",
          {
            y: "0%",
            ease: "expo.inOut",
            duration: 1.5,
          },
          "-=1.8"
        );
    },
    { scope: containerRef }
  );

  const handleClick = () => {
    if (!tlRef) return;

    tlRef.current.play();
  };
  return (
    <div className="container" ref={containerRef}>
      <button className="btn" onClickCapture={handleClick}>
        Enter
      </button>
      <div className="text-wrapper">
        {TYPOGRAPHTY_INTRO_ANIMATION_TEXTS.map((text, indx) => (
          <div className="text" key={indx}>
            <h1>{text}</h1>
          </div>
        ))}
      </div>
      <div className="header">
        <h1>Vogue</h1>
      </div>
    </div>
  );
};

export default TypographyIntroAnimation;
