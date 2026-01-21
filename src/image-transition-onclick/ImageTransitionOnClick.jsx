import HoverTransition from "./HoverTransition";
import ClickTransition from "./ClickTransition";
import "./index.css";

const itemData = [
  { text: "Azure", img: "./images/img1.png" },
  { text: "Euphoria", img: "./images/img2.png" },
  { text: "Serendipity", img: "./images/img3.png" },
  { text: "Luminous", img: "./images/img4.png" },
  { text: "Ephemeral", img: "./images/img5.png" },
];

const ImageTransitionOnClick = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">PPM</div>
        <div className="menu">Menu</div>
      </nav>
      <HoverTransition itemData={itemData} />
      <ClickTransition itemData={itemData} />
    </div>
  );
};

export default ImageTransitionOnClick;
