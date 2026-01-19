import React from "react";

const BlockRevealOnClick = () => {
  return (
    <>
      <button className="toggle">
        <span>&#9776;</span>
      </button>

      <div className="nav">
        <p className="logo">Logo</p>
        <div className="navs">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
        </div>
      </div>

      <div className="content">
        <h1>
          We <br />
          Help <br />
          brands <br />
          explor <br />
          vibes
        </h1>
      </div>

      <div className="overlay">
        <div className="h1">Work With us</div>
        <div className="menus">
          <div className="menu-nav">
            <p>(01)</p>
            <p>Contact</p>
          </div>
          <div className="menu-nav">
            <p>(02)</p>
            <p>Portfolio</p>
          </div>
          <div className="menu-nav">
            <p>(03)</p>
            <p>About Us</p>
          </div>
          <div className="menu-nav">
            <p>(04)</p>
            <p>Services</p>
          </div>
        </div>
      </div>

      <div className="square-container"></div>
    </>
  );
};

export default BlockRevealOnClick;
