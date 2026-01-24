import { forwardRef } from "react";
import Magnetic from "./Magnetic";
const Header = forwardRef((props, ref) => {
  return (
    <div className="header">
      <Magnetic>
        <div className="burger">
          <div ref={ref} className="bounds"></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;
