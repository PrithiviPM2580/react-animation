import { forwardRef } from "react";
const Header = forwardRef((props, ref) => {
  return (
    <div className="header">
      <div className="burger" ref={ref}></div>
    </div>
  );
});

export default Header;
