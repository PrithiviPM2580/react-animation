import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const paragraph = [
  "Elegant Design",
  "Modern Interface",
  "Creative Solutions",
  "User Friendly",
  "Premium Quality",
];
const RevealSidePage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(containerRef.current, {
        left: "-50%",
      });
      const tl = gsap.timeline();

      tl.from(".right-side h1", {
        y: 50,
        stagger: 0.2,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );
  return (
    <div className="container" ref={containerRef}>
      <div className="left-side side">
        <div className="img">
          <img src="./images/img4.webp" alt="" />
        </div>
        {paragraph.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className="right-side side">
        <div className="images">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="img" key={index}>
              <img src={`./images/img${index + 1}.webp`} alt="" />
            </div>
          ))}
        </div>
        <h1>Gorgeoushe</h1>
      </div>
    </div>
  );
};

export default RevealSidePage;
