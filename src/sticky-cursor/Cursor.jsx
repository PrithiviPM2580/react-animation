import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const Cursor = ({ stickyRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseOver = (e) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    stickyRef.current.addEventListener("mouseenter", manageMouseOver);
    stickyRef.current.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      stickyRef.current.removeEventListener("mouseenter", manageMouseOver);
      stickyRef.current.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default Cursor;
