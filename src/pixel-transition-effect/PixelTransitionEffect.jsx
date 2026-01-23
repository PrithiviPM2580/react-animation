import { useState } from "react";
import "./index.css";
import Header from "./Header";
import Menu from "./Menu";
import HorizontalPixelBackground from "./HorizontalPixelBackground";
import VerticalPixelBackground from "./VeritcalPixelBackground";

const PixelTransitionEffect = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <main>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />
      <VerticalPixelBackground menuIsActive={menuIsActive} />
    </main>
  );
};

export default PixelTransitionEffect;
