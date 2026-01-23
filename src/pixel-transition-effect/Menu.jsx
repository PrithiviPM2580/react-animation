import { motion } from "motion/react";
const anim = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

const Menu = ({ menuIsActive }) => {
  return (
    <motion.div
      className="menu"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "exit"}
    >
      <p>Home</p>

      <p>About</p>

      <p>Contact</p>
    </motion.div>
  );
};

export default Menu;
