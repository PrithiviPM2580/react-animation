import { motion } from "motion/react";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.05 * i,
    },
  }),
  close: (i) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.05 * i,
    },
  }),
};

const PixelBackground = ({ menuIsActive }) => {
  const suffles = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };
  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const boxSize = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / boxSize);
    const delays = suffles([...Array(amountOfBlocks)].map((_, i) => i));
    return delays.map((randomDelay, i) => {
      return (
        <motion.div
          className="block"
          key={i}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "close"}
          custom={randomDelay}
        ></motion.div>
      );
    });
  };
  return (
    <div className="pixelBackground">
      {[...Array(20)].map((_, i) => {
        return (
          <div className="column" key={i}>
            {getBlocks()}
          </div>
        );
      })}
    </div>
  );
};

export default PixelBackground;
