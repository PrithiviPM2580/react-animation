import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import "./index.css";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const sentences = [
  "Pixels<br />move with purpose",
  "Animate<br />your bright ideas",
  "Dream<br />build and repeat",
  "Innovate<br />every single day",
  "Web<br />magic comes alive",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sentences.length;
  const slidesRef = useRef(null);

  useGSAP(() => {
    gsap.to(slidesRef.current, {
      x: -100 * currentIndex + "vw",
      duration: 0.25,
      ease: "power1.out",
      overwrite: "auto",
    });
  }, [currentIndex]);

  return (
    <>
      <div className="text-slider">
        <div className="text-slides" ref={slidesRef}>
          {sentences.map((sentence, index) => (
            <div
              className={`text-slide ${index === currentIndex ? "active" : ""}`}
              key={index}
            >
              <h1 dangerouslySetInnerHTML={{ __html: sentence }} />
            </div>
          ))}
        </div>
      </div>
      <div className="control__button">
        <button
          className="prev-btn"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
          }
        >
          &larr;
        </button>
        <button
          className="next-btn"
          onClick={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        >
          &rarr;
        </button>
      </div>
    </>
  );
};

export default Slider;
