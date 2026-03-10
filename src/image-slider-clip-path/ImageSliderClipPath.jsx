import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";
import { useRef } from "react";

const ImageSliderClipPath = () => {
  const sliderContentRef = useRef(null);
  const slides = useRef([]);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);

  function handleWheelScroll(e) {
    e.preventDefault();
    if (isAnimating.current) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = currentIndex.current + direction;

    if (nextIndex < 0 || nextIndex >= slides.current.length) return;

    isAnimating.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        currentIndex.current = nextIndex;
        isAnimating.current = false;
      },
    });

    tl.to(".prefix, .names, .years", {
      y: `+=${direction > 0 ? -30 : 30}`,
      duration: 1,
    });

    slides.current.forEach((slide, index) => {
      tl.to(slide, {
        scale: 1,
        top: "0%",
        duration: 2,
        ease: "power3.inOut",
      })
        .to(
          slide,
          {
            clipPath:
              index === nextIndex
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            duration: 1.2,
          },
          "<",
        )
        .to(
          slide,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            duration: 1.2,
          },
          "<",
        );
    });
  }

  useGSAP(
    () => {
      window.addEventListener("wheel", handleWheelScroll, { passive: false });
    },
    { scope: sliderContentRef },
  );

  return (
    <>
      <div className="slider-content" ref={sliderContentRef}>
        <div className="slide-number">
          <div className="prefix">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className="postfix">
            <span>/</span> 5
          </div>
        </div>
        <div className="slide-name">
          <div className="names">
            <div>Ether Shift Mode</div>
            <div>Solar Thread</div>
            <div>Quantum Sheen Veil</div>
            <div>Flux Aura</div>
            <div>Echo Nimbus</div>
          </div>
        </div>
        <div className="slide-year">
          <div className="years">
            <div>2020</div>
            <div>2021</div>
            <div>2022</div>
            <div>2023</div>
            <div>2024</div>
          </div>
        </div>
      </div>
      <div className="slider">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="slide"
            key={index}
            id={`slide-${index + 1}`}
            ref={(el) => (slides.current[index] = el)}
          >
            <img
              src={`/images/img${index + 1}.png`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSliderClipPath;
