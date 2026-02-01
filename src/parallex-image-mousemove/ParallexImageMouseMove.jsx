import { useGSAP } from "@gsap/react";
import "./index.css";
import { useRef } from "react";
import gsap from "gsap";

const ParallexImageMouseMove = () => {
  const containerRef = useRef(null);
  const parallelSpeed = 10;

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".item");

      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        items.forEach((item, index) => {
          // Each item gets a different speed multiplier (1x, 2x, 3x, etc.)
          const speedMultiplier = (index + 1) * 0.5;

          gsap.to(item, {
            x: x * parallelSpeed * speedMultiplier,
            y: y * parallelSpeed * speedMultiplier,
            ease: "power2.out",
            duration: 0.6,
          });
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef },
  );
  return (
    <div className="container" ref={containerRef}>
      <div className="header">
        <h1>Parallex Image Mouse Move</h1>
        <p>Move your mouse over the image to see the parallax effect.</p>
        <div>
          <button>Click Me</button>
        </div>
      </div>
      <div className="gallery">
        {[...Array(15)].map((_, i) => {
          const index = (i % 6) + 1;
          return (
            <div
              className="item"
              key={i}
              style={{
                top: Math.random() * 80 + "%",
                left: Math.random() * 80 + "%",
              }}
            >
              <img src={`./images/img${index}.png`} alt={`Image ${index}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallexImageMouseMove;
