import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(SplitText);
const TextHoverImageReveal = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(
    () => {
      const images = imagesRef.current;

      if (!images) return;
      const splitText = new SplitText(".text h1", { type: "chars" });
      const chars = splitText.chars;

      images.forEach((img, indx) => {
        if (indx !== 0) {
          gsap.set(img, {
            y: "100%",
          });
        }
      });

      const tl = gsap.timeline();

      tl.to(images, {
        y: "0%",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      })
        .to(".images", {
          y: "25em",
          scale: 3,
          duration: 1,
          ease: "power2.inOut",
          transformOrigin: "center top",
          delay: 1,
        })
        .to(
          chars,
          {
            y: "100%",
            duration: 0.6,
            ease: "power4.inOut",
            stagger: 0.05,
          },
          "-=0.9"
        )
        .from(
          ".nav",
          {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );
  return (
    <div className="container" ref={containerRef}>
      <div className="nav">
        <div class="logo">Logo</div>
        <div class="name">PPM</div>
        <div class="link">
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
        </div>
      </div>
      <div class="text">
        <h1>Reach the fullest</h1>
      </div>
      <div className="images">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            class="image image1"
            ref={(el) => (imagesRef.current[index] = el)}
          >
            <img
              src={`../images/img${index + 1}.webp`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextHoverImageReveal;
