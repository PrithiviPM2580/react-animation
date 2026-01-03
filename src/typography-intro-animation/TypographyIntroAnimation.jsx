import { TYPOGRAPHTY_INTRO_ANIMATION_TEXTS } from "../constant";
import "./index.css";

const TypographyIntroAnimation = () => {
  return (
    <div class="container">
      <button class="btn">Enter</button>
      <div class="text-wrapper">
        {TYPOGRAPHTY_INTRO_ANIMATION_TEXTS.map((text, indx) => (
          <div class="text" key={indx}>
            <h1>{text}</h1>
          </div>
        ))}
      </div>
      <div class="header">
        <h1>Vogue</h1>
      </div>
    </div>
  );
};

export default TypographyIntroAnimation;
