import "./style.css";
import { getRandomImage } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const LandingIntroAnimation = () => {
  const appRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0 });

      tl.to(".col", {
        top: 0,
        duration: 3,
        ease: "power4.inOut",
      });

      tl.to(
        ".col-1 .item",
        {
          top: 0,
          stragger: 0.25,
          duration: 3,
          ease: "power4.inOut",
        },
        "-=4",
      );

      tl.to(
        ".col-2 .item",
        {
          top: 0,
          stragger: -0.25,
          duration: 3,
          ease: "power4.inOut",
        },
        "-=4",
      );
      tl.to(
        ".col-3 .item",
        {
          top: 0,
          stragger: 0.25,
          duration: 3,
          ease: "power4.inOut",
        },
        "-=4",
      );
      tl.to(
        ".col-4 .item",
        {
          top: 0,
          stragger: -0.25,
          duration: 3,
          ease: "power4.inOut",
        },
        "-=4",
      );
      tl.to(
        ".col-5 .item",
        {
          top: 0,
          stragger: 0.25,
          duration: 3,
          ease: "power4.inOut",
        },
        "-=4",
      );
      tl.to(
        ".container",
        {
          scale: 6,
          duration: 4,
          ease: "power4.inOut",
        },
        "-=2",
      );

      tl.to(
        ".nav-item a, .title p, .slide-num p, .preview img",
        {
          top: 0,
          stagger: 0.075,
          duration: 1,
          ease: "power3.out",
        },
        "-=1.5",
      );
      tl.to(
        ".icon, .icon-2",
        {
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "-=1",
      );
    },
    { scope: appRef },
  );
  return (
    <main className="app" ref={appRef}>
      <div className="container">
        <div className="col col-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-2">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-3">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-4">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-5">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="content">
        <nav>
          <div className="nav-item">
            <a href="#" id="active">
              Work
            </a>
          </div>
          <div className="nav-item">
            <a href="#">About</a>
          </div>
        </nav>
        <div className="hero">
          <div className="icon">
            <span>+</span>
          </div>
          <div className="title">
            <p>The Regeneration Site</p>
          </div>
          <div className="icon-2">
            <span>+</span>
          </div>
        </div>
        <footer>
          <div className="preview">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                src={`/images/img${i + 1}.png`}
                alt={`Image ${i + 1}`}
                key={i}
              />
            ))}
          </div>
          <div className="slide-num">
            <p>1 &mdash; 3</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingIntroAnimation;
