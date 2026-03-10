import { useGSAP } from "@gsap/react";
import SmoothScrolling from "../SmoothScrolling";
import "./style.css";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const RevealImageOnScroll = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".img-container").forEach((img) => {
        const isLeft = img.classList.contains("left");

        gsap.fromTo(
          img.querySelector("img"),
          {
            clipPath: isLeft
              ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" // left: collapsed on left edge
              : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", // right: collapsed on right edge
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // full reveal
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 100%", // when top of image hits 100% of viewport
              end: "top 20%", // until top hits 20% of viewport
              scrub: true, // link animation to scroll
              //   markers: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <SmoothScrolling>
      <div className="container" ref={containerRef}>
        <div className="row" id="row-1">
          <div className="col">
            <div className="img-container right">
              <img src="/images/img1.png" alt="" />
              <p>Image 1</p>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-2">
          <div className="col"></div>
          <div className="col">
            <div className="img-container left">
              <img src="/images/img5.png" alt="" />
              <p>Image 6</p>
            </div>
          </div>
        </div>
        <div className="row" id="row-3">
          <div className="col">
            <div className="img-container right">
              <img src="/images/img2.png" alt="" />
              <p>Image 2</p>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-4">
          <div className="col"></div>
          <div className="col">
            <div className="img-container left">
              <img src="/images/img4.png" alt="" />
              <p>Image 7</p>
            </div>
          </div>
        </div>
        <div className="row" id="row-5">
          <div className="col">
            <div className="img-container right">
              <img src="/images/img3.png" alt="" />
              <p>Image 3</p>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-6">
          <div className="col"></div>
          <div className="col">
            <div className="img-container left">
              <img src="/images/img1.png" alt="" />
              <p>Image 8</p>
            </div>
          </div>
        </div>
        <div className="row" id="row-7">
          <div className="col">
            <div className="img-container right">
              <img src="/images/img4.png" alt="" />
              <p>Image 4</p>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-8">
          <div className="col"></div>
          <div className="col">
            <div className="img-container left">
              <img src="/images/img2.png" alt="" />
              <p>Image 9</p>
            </div>
          </div>
        </div>
        <div className="row" id="row-9">
          <div className="col">
            <div className="img-container right">
              <img src="/images/img5.png" alt="" />
              <p>Image 5</p>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-10">
          <div className="col"></div>
          <div className="col">
            <div className="img-container left">
              <img src="/images/img3.png" alt="" />
              <p>Image 10</p>
            </div>
          </div>
        </div>
        <div className="whitespace"></div>
      </div>
    </SmoothScrolling>
  );
};

export default RevealImageOnScroll;
