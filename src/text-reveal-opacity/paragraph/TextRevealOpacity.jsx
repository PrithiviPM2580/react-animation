import { useRef } from "react";
import "./index.css";
import { motion, useScroll } from "motion/react";
import { useEffect } from "react";

const TextRevealOpacity = () => {
  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);
  return (
    <main>
      <div style={{ height: "100svh" }} />
      <motion.p
        className="para"
        ref={elementRef}
        style={{ opacity: scrollYProgress }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ad
        minus labore vero fugit. Neque dicta eos quis animi numquam,
        consequuntur ullam, quia ex doloribus unde quae iusto minus voluptatem.
      </motion.p>
      <div style={{ height: "100svh" }} />
    </main>
  );
};

export default TextRevealOpacity;
