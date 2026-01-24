import { motion } from "motion/react";

const Animation = ({ children }) => {
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const noOfColumns = 5;

  const expand = {
    initial: { top: 0 },
    enter: (index) => ({
      top: "100%",
      transition: { duration: 0.4, delay: 0.05 * index },
      transitionEnd: { height: 0, top: 0 },
    }),
    exit: (index) => ({
      height: "100%",
      transition: { duration: 0.4, delay: 0.05 * index },
    }),
  };

  return (
    <div className="page stairs">
      <div className="transition-container">
        {[...Array(noOfColumns)].map((_, i) => (
          <motion.div {...anim(expand, noOfColumns - i)} key={i}></motion.div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Animation;
