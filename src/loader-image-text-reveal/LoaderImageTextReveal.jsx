import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

function LoaderImageTextReveal() {
  const mainRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".loader", {
        y: 80,
        scaleY: 0,
        transformOrigin: "50% 100%",
      });
      const tl = gsap.timeline();

      tl.to(".loader", {
        y: 0,
        scaleY: 1,
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.5,
      })
        .to(".loader", {
          duration: 0.5,
          y: -80,
          scaleY: 0,
          ease: "power2.inOut",
          transformOrigin: "50% -100%",
          opacity: 1,
        })
        .to(".wrapper", {
          duration: 0.6,
          top: "-100%",
          ease: "power2.inOut",
          delay: 0.2,
        })
        .from(
          "h1",
          {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          ".box",
          {
            duration: 1,
            y: "-100%",
            ease: "power2.inOut",
          },
          "<"
        )
        .from(
          ".navs",
          {
            duration: 1,
            y: 50,
            ease: "power2.out",
            opacity: 0,
          },
          "<"
        );
    },
    { scop: mainRef }
  );
  return (
    <div ref={mainRef}>
      <div className="wrapper">
        <div className="loader"></div>
      </div>

      <div className="container">
        <div className="navs">
          <div className="nav-1 nav">Home</div>
          <div className="nav-2 nav">Logo</div>
          <div className="nav-3 nav">&equiv;</div>
        </div>
        <div className="img-wrapper">
          <div className="box"></div>
          <div className="img">
            <img src="../images/img5.webp" alt="" />
          </div>
        </div>

        <div className="header">
          <h1>Paul Panday</h1>
          <h1>Roman Reign</h1>
        </div>
      </div>
    </div>
  );
}

export default LoaderImageTextReveal;
