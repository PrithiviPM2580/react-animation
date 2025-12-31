import "./index.css";
import { hoverRevealImages } from "../constant";
import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";

const HoverRevealImage = () => {
  const imageRef = useRef(null);
  const imagesRef = useRef([]);
  const moveXRef = useRef(null);
  const moveYRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    hoverRevealImages.forEach((item) => {
      const img = new Image();
      img.src = item.dataImg;
    });
  }, []);

  const handleMouseEnter = useCallback((imgSrc) => {
    const image = imageRef.current;
    if (!image) return;

    setCurrentImage(imgSrc);

    gsap.to(image, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const image = imageRef.current;
    if (!image) return;

    gsap.to(image, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    const items = imagesRef.current;

    if (!image) return;

    gsap.set(image, {
      opacity: 0,
      scale: 0.8,
      xPercent: -50,
      yPercent: -50,
    });

    moveXRef.current = gsap.quickTo(image, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    moveYRef.current = gsap.quickTo(image, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const onMouseMove = (e) => {
      moveXRef.current?.(e.clientX);
      moveYRef.current?.(e.clientY);
    };

    document.addEventListener("mousemove", onMouseMove);

    const cleanups = items.map((el, index) => {
      if (!el) return null;

      const enter = () => handleMouseEnter(hoverRevealImages[index].dataImg);
      const leave = handleMouseLeave;

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cleanups.forEach((fn) => fn && fn());
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <div className="container">
      <div className="navs">
        <h1 className="logo">Logo</h1>
        <h1 className="name">Prithivi</h1>
        <div className="link">
          <h1>Home</h1>
          <h1>Contact</h1>
          <h1>Shop</h1>
        </div>
      </div>

      <div className="details">
        <div className="details-text">
          <h2>
            Eleveted <br />
            Details
          </h2>
          <p>View Showreel</p>
        </div>
        <h1>/All Projects</h1>
      </div>

      <div className="wrapper">
        <div className="img" ref={imageRef}>
          <img src={currentImage} alt="" />
        </div>
        <div className="text">
          {hoverRevealImages.map((item, index) => (
            <div
              className="text-img"
              data-img={item.dataImg}
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
            >
              <h1>{item.tag}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverRevealImage;
