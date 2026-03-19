import SmoothScrolling from "../SmoothScrolling";
import Images from "./Images";
import Minimap from "./Minimap";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_IMAGES = 10;
const IMAGE_VARIANTS = 6;
const OFFSETS = [-15, -7.5, 0, 7.5, 15];

const MinimapScroll = () => {
  const thumbnailRefs = useRef([]);
  const fullImageRefs = useRef([]);
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  const images = Array.from({ length: TOTAL_IMAGES }).map((_, index) => ({
    index: (index % IMAGE_VARIANTS) + 1,
    offset: OFFSETS[Math.floor(Math.random() * OFFSETS.length)] + "px",
  }));

  return (
    <SmoothScrolling>
      <div className="container">
        <nav>
          <p>PPM</p>
          <button>Sign Up</button>
        </nav>
        <div className="section">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut
            officiis ex architecto perferendis minima eaque autem et. Possimus
            consectetur nulla corporis excepturi dolor dignissimos sunt fugiat
            ducimus! Consequuntur, ut.
          </h1>
        </div>
        <div className="gallery">
          <Minimap images={images} />
          <Images images={images} />
        </div>
        <div className="section">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut
            officiis ex architecto perferendis minima eaque autem et. Possimus
            consectetur nulla corporis excepturi dolor dignissimos sunt fugiat
            ducimus! Consequuntur, ut.
          </h1>
        </div>
      </div>
    </SmoothScrolling>
  );
};

export default MinimapScroll;
