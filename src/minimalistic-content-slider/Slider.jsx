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
  const textSlideRef = useRef(null);
  const smallSliderRef = useRef(null);
  const bigSliderRef = useRef(null);

  useGSAP(() => {
    gsap.to(textSlideRef.current, {
      x: -100 * currentIndex + "vw",
      duration: 0.5,
      ease: "power1.out",
      overwrite: "auto",
    });
    gsap.fromTo(
      smallSliderRef.current,
      {
        scale: 0.95,
      },
      {
        x: -20 * currentIndex + "vw",
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        overwrite: "auto",
      }
    );
    gsap.fromTo(
      bigSliderRef.current,
      {
        scale: 0.95,
      },
      {
        x: -50 * currentIndex + "vw",
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        overwrite: "auto",
      }
    );
  }, [currentIndex]);

  return (
    <>
      <div className="small-slider">
        <div className="small-slides" ref={smallSliderRef}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              className={`img ${index === currentIndex ? "active" : ""}`}
              key={index}
            >
              <img
                src={`./images/img${index + 1}.webp`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="big-slider">
        <div className="big-slides" ref={bigSliderRef}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              className={`img ${index === currentIndex ? "active" : ""}`}
              key={index}
            >
              <img
                src={`./images/img${index + 1}.webp`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-slider">
        <div className="text-slides" ref={textSlideRef}>
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
