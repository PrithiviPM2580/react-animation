import { motion } from "motion/react";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delays) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.05 * delays[0],
    },
  }),
  close: (delays) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.05 * delays[1],
    },
  }),
};

const HorizontalPixelBackground = ({ menuIsActive }) => {
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
  const getBlocks = (indexOfColumn) => {
    const { innerWidth, innerHeight } = window;
    const boxSize = innerHeight * 0.05;
    const amountOfBlocks = Math.ceil(innerWidth / boxSize);
    const delays = suffles([...Array(amountOfBlocks)].map((_, i) => i));
    return delays.map((randomDelay, i) => {
      return (
        <motion.div
          className="block"
          key={i}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "close"}
          custom={[
            indexOfColumn + randomDelay,
            20 - indexOfColumn + randomDelay,
          ]}
        ></motion.div>
      );
    });
  };
  return (
    <div className="pixelBackground">
      {[...Array(20)].map((_, i) => {
        return (
          <div className="column" key={i}>
            {getBlocks(i)}
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalPixelBackground;
