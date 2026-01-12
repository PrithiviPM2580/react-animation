import { useState } from "react";
import "./index.css";

const ClickRevealAnimation = () => {
  return (
    <>
      <div class="container"></div>
      <div class="navs">
        <div class="first-nav nav">
          <div class="logo-1 logo"></div>
          <div class="titles">
            <h1>Creative</h1>
            <p>Design for the better future</p>
          </div>
        </div>
        <div class="second-nav nav">
          <div class="logo-2 logo"></div>
          <div class="titles">
            <h1>Awkward</h1>
            <p>Showcase the best design</p>
          </div>
        </div>
        <div class="third-nav nav">
          <div class="logo-3 logo"></div>
          <div class="titles">
            <h1>Future</h1>
            <p>Innovate and inspire</p>
          </div>
        </div>
        <div class="toggle">
          <button>Show Less</button>
        </div>
      </div>
    </>
  );
};

export default ClickRevealAnimation;
