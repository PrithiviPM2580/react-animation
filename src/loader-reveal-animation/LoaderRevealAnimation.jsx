import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const LoaderRevealAnimation = () => {
  const loaderRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut", duration: 3.5 },
      });

      tl.from(".clip-top, .clip-bottom", {
        duration: 2,
        delay: 0.2,
        height: "50vh",
      })
        .to(
          ".marquee",
          {
            duration: 2,
            top: "50%",
          },
          "-=1.5"
        )
        .from(
          ".clip-top .marquee, .clip-bottom .marquee",
          {
            duration: 5,
            left: "100%",
            ease: "power3.inOut",
          },
          "-=2.5"
        )
        .from(
          ".clip-center .marquee",
          {
            duration: 5,
            left: "-50%",
            ease: "power3.inOut",
          },
          "<"
        )
        .to(
          ".clip-top",
          {
            duration: 1,
            clipPath: "inset(0 0 100% 0)",
          },
          "-=1"
        )
        .to(
          ".clip-bottom",
          {
            duration: 1,
            clipPath: "inset(100% 0 0 0)",
          },
          "<"
        )
        .to(
          "clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span",
          {
            duration: 1,
            opacity: 0,
            ease: "power2.inOut",
          },
          "-=.9.8"
        );
    },
    { scope: loaderRef }
  );
  return (
    <>
      <div className="loader" ref={loaderRef}>
        <div className="loader-clip clip-top ">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rove&reg;</span>
              <span>Rove&reg;</span>
              Rove&reg;
              <span>Rove&reg;</span>
              <span>Rove&reg;</span>
            </div>
          </div>
        </div>
        <div className="loader-clip clip-bottom ">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rove&reg;</span>
              <span>Rove&reg;</span>
              Rove&reg;
              <span>Rove&reg;</span>
              <span>Rove&reg;</span>
            </div>
          </div>
        </div>
        <div className="clip-center">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rove&reg;</span>
              <span>Rove&reg;</span>
              Rove&reg;
              <span>Rove&reg;</span>
              <span>Rove&reg;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="navs">
          <div className="logo">Logo</div>
          <div className="name">PPM</div>
          <div className="navs">
            <p>Home</p>
            <p>Contact</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default LoaderRevealAnimation;
