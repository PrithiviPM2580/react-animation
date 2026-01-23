import { useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { titles } from "../constant";
import { getRandomColor } from "../utils";
import "./index.css";

gsap.registerPlugin(CustomEase);

CustomEase.create(
  "hop",
  "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1",
);

const SliderOnclickTextReveal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="container">
      <nav>
        <div className="logo">PPM</div>
        <div className="menu">Menu</div>
      </nav>
      <footer>
        <p>Unlock the power of gsap</p>
        <p>Gsap is best</p>
      </footer>
      <div className="bg-overlay"></div>
      <div className="slider-nav"></div>
      <div className="slides"></div>
      <div className="slide-title">
        <div className="slide-title">
          {Array.from({ length: 7 }).map((_, indx) => (
            <div className="letter" key={indx}></div>
          ))}
        </div>
        <div className="slide-title">
          {Array.from({ length: 7 }).map((_, indx) => (
            <div className="letter" key={indx}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderOnclickTextReveal;
