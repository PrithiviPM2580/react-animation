import { useRef } from "react";
import "./index.css";
import { motion, useScroll, useTransform } from "motion/react";

const value =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
const word = value.split(" ");

const TextRevealOpacity = () => {
  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  return (
    <main>
      <div style={{ height: "100svh" }} />
      <p className="para" ref={elementRef} style={{ opacity: scrollYProgress }}>
        {word.map((item, i) => {
          const start = i / word.length;
          const end = start + 1 / word.length;
          return (
            <Word
              key={i}
              range={[start, end]}
              scrollYProgress={scrollYProgress}
            >
              {item}
            </Word>
          );
        })}
      </p>
      <div style={{ height: "100svh" }} />
    </main>
  );
};

export default TextRevealOpacity;

const Word = ({ children, range, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  return (
    <motion.span style={{ opacity: opacity }} className="word">
      {children}
    </motion.span>
  );
};
