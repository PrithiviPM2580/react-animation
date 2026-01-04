import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const FullScreenImageSlider = () => {
  const sliderRef = useRef(null);
  const currentSlideIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const currentTopValueRef = useRef(0);

  useGSAP(
    () => {
      if (!sliderRef.current) return;

      const slides = sliderRef.current.querySelectorAll(".slide");

      // Initialize slides (except first one)
      slides.forEach((slide, index) => {
        if (index !== 0) {
          const img = slide.querySelector("img");
          gsap.set(img, { scale: 2, top: "4em" });
        }
      });

      const elements = [
        { selector: ".prefix", delay: 0 },
        { selector: ".names", delay: 0.15 },
        { selector: ".years", delay: 0.3 },
      ];

      const showSlide = (index) => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        const currentSlide = slides[index];
        const currentImg = currentSlide.querySelector("img");

        currentTopValueRef.current -= 30;

        const tl = gsap.timeline({
          onComplete: () => {
            isAnimatingRef.current = false;
          },
        });

        // Animate text elements
        elements.forEach((elem) => {
          const element = document.querySelector(elem.selector);
          if (element) {
            tl.to(
              element,
              {
                y: currentTopValueRef.current,
                duration: 2,
                ease: "power4.inOut",
              },
              elem.delay
            );
          }
        });

        // Animate new image
        tl.to(
          currentImg,
          {
            scale: 1,
            top: 0,
            duration: 2,
            ease: "power4.inOut",
          },
          0
        );

        // Reveal slide from bottom to top
        tl.fromTo(
          currentSlide,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.inOut",
          },
          0
        );
      };

      const hideSlide = (index) => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        const currentSlide = slides[index];
        const previousSlide = slides[index - 1];
        const currentImg = currentSlide.querySelector("img");
        const previousImg = previousSlide.querySelector("img");

        currentTopValueRef.current += 30;

        const tl = gsap.timeline({
          onComplete: () => {
            isAnimatingRef.current = false;
          },
        });

        // Animate text elements
        elements.forEach((elem) => {
          const element = document.querySelector(elem.selector);
          if (element) {
            tl.to(
              element,
              {
                y: currentTopValueRef.current,
                duration: 2,
                ease: "power4.inOut",
              },
              elem.delay
            );
          }
        });

        // Animate current image
        tl.to(
          currentImg,
          {
            scale: 2,
            top: "4em",
            duration: 2,
            ease: "power4.inOut",
          },
          0
        );

        // Hide current slide to bottom
        tl.to(
          currentSlide,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4.inOut",
          },
          0
        );

        // Reveal previous slide from bottom
        tl.fromTo(
          previousSlide,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.inOut",
          },
          0
        );

        // Animate previous image
        tl.to(
          previousImg,
          {
            scale: 1,
            top: 0,
            duration: 2,
            ease: "power4.inOut",
          },
          0
        );
      };

      const handleWheel = (e) => {
        if (isAnimatingRef.current) return;

        if (e.deltaY > 0 && currentSlideIndexRef.current < slides.length - 1) {
          showSlide(currentSlideIndexRef.current + 1);
          currentSlideIndexRef.current++;
        } else if (e.deltaY < 0 && currentSlideIndexRef.current > 0) {
          hideSlide(currentSlideIndexRef.current);
          currentSlideIndexRef.current--;
        }
      };

      window.addEventListener("wheel", handleWheel);

      // Cleanup
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    },
    { scope: sliderRef, dependencies: [] }
  );
  return (
    <>
      <div className="slider-content">
        <div className="slide-number">
          <div className="prefix">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
          <div className="postfix">
            <span>/</span> 5
          </div>
        </div>
        <div className="slide-name">
          <div className="names">
            {[
              "Ether Shift Mode",
              "Solar Thread",
              "Quantam Sheil Veil",
              "Flux Aura",
              "Echo Nimbus",
            ].map((name, index) => (
              <div key={index}>{name}</div>
            ))}
          </div>
        </div>
        <div className="slide-year">
          <div className="years">
            {["2021", "2022", "2023", "2024", "2025"].map((year, index) => (
              <div key={index}>{year}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider" ref={sliderRef}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="slide" id={`slide-${index + 1}`} key={index}>
            <img
              src={`./images/img${index + 1}.png`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FullScreenImageSlider;
