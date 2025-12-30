import useReveal from "./useReveal";
import "./index.css";

const Reveal = ({ children, threshold }) => {
  const { revealRef, reveal } = useReveal(threshold);
  return (
    <div
      ref={revealRef}
      className={`${reveal ? "reveal" : ""} ${children.props.className || ""}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
