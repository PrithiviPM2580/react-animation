import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "motion/react";
import { useEffect, useState, useCallback, useRef } from "react";

const Cursor = ({ stickyRef }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);
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

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: angle + "rad" }, { duration: 0 });
  };
  const mouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      const size = isHovered ? 60 : 20;
      const { left, top, width, height } =
        stickyRef.current.getBoundingClientRect();
      const center = {
        x: left + width / 2,
        y: top + height / 2,
      };

      const distance = {
        x: clientX - center.x,
        y: clientY - center.y,
      };

      if (isHovered) {
        rotate(distance);
        const absDistance = Math.max(
          Math.abs(distance.x),
          Math.abs(distance.y),
        );
        const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
        const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);

        scale.x.set(newScaleX);
        scale.y.set(newScaleY);
        mouse.x.set(center.x - size / 2 + distance.x * 0.1);
        mouse.y.set(center.y - size / 2 + distance.y * 0.1);
      } else {
        mouse.x.set(clientX - size / 2);
        mouse.y.set(clientY - size / 2);
      }
    },
    [isHovered, mouse.x, mouse.y],
  );

  const manageMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
      { type: "spring" },
    );
  }, []);

  useEffect(() => {
    const element = stickyRef.current;
    if (!element) return;

    window.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseenter", manageMouseOver);
    element.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      if (element) {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      }
    };
  }, [mouseMove, manageMouseOver, manageMouseLeave, stickyRef]);

  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  return (
    <motion.div
      transformTemplate={template}
      className="cursor"
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default Cursor;
