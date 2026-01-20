import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">PPM</div>
      <div className="navs">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
