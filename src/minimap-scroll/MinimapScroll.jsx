import { useGSAP } from "@gsap/react";
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
  const activeThumbnail = useRef(null);

  const images = Array.from({ length: TOTAL_IMAGES }).map((_, index) => ({
    index: (index % IMAGE_VARIANTS) + 1,
    offset: OFFSETS[Math.floor(Math.random() * OFFSETS.length)] + "px",
  }));

  useGSAP(
    () => {
      fullImageRefs.current.forEach((fullImage, index) => {
        const thumbnail = thumbnailRefs.current[index];

        ScrollTrigger.create({
          trigger: fullImage,
          start: "top center",
          end: "bottom center",
          markers: true,
          onToggle: ({ isActive }) => {
            if (isActive) {
              // Deactivate previous active thumbnail
              if (activeThumbnail && activeThumbnail !== thumbnail) {
                gsap.to(activeThumbnail, {
                  opacity: 0.5,
                  scale: 1,
                  border: "none",
                });
              }
              // Activate current thumbnail
              gsap.to(thumbnail, {
                opacity: 1,
                scale: 1.3,
                border: "1px solid #fff",
              });
              activeThumbnail.current = thumbnail;
            } else if (activeThumbnail === thumbnail) {
              gsap.to(thumbnail, {
                opacity: 0.5,
                scale: 1,
                border: "none",
              });
            }
          },
        });
      });
    },
    { dependencies: [] },
  );

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
          <Minimap images={images} thumbnailRefs={thumbnailRefs} />
          <Images images={images} fullImageRefs={fullImageRefs} />
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
