import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useGSAP(
    () => {
      const moveContainerX = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      const moveContainerY = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        moveContainerX(e.clientX);
        moveContainerY(e.clientY);
      });

      return () => {
        window.removeEventListener("mousemove", () => {
          moveContainerX(e.clientX);
          moveContainerY(e.clientY);
        });
      };
    },
    { scope: modalContainer },
  );
  return (
    <motion.div
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "open" : "close"}
      className="modalContainer"
      ref={modalContainer}
    >
      <div className="modalSlider" style={{ top: index * -100 + "%" }}>
        {projects.map((project, index) => {
          const { src, color } = project;
          return (
            <div
              className="modal"
              style={{ backgroundColor: color }}
              key={`model_${index}`}
            >
              <img src={src} alt="image" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;
