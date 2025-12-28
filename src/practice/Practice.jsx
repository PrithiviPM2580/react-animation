import { useState } from "react";
import "./index.css";

const sentences = [
  "Code<br />and create daily",
  "Pixels<br />move with purpose",
  "Animate<br />your bright ideas",
  "Click<br />scroll explore web",
  "Web<br />magic comes alive",
];

export default function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = sentences.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + total) % total);
  };

  return (
    <div className="slider">
      <div className="slide-text">
        {sentences.map((sentence, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            dangerouslySetInnerHTML={{ __html: sentence }}
          />
        ))}
      </div>

      <div className="buttons">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}
