import HoverTransition from "./HoverTransition";
import "./index.css";

const ImageTransitionOnClick = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">PPM</div>
        <div className="menu">Menu</div>
      </nav>
      <HoverTransition />
    </div>
  );
};

export default ImageTransitionOnClick;
