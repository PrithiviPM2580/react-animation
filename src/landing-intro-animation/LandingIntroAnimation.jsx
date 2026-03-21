import "./style.css";
import { getRandomImage } from "../utils";

const LandingIntroAnimation = () => {
  return (
    <main className="app">
      <div className="container">
        <div className="col col-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-2">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-3">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-4">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
        <div className="col col-5">
          {Array.from({ length: 5 }).map((_, i) => {
            const randomImage = getRandomImage();
            return (
              <div className="item" key={i}>
                <img src={`/images/img${randomImage}.png`} alt={`Image ${i}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="content"></div>
    </main>
  );
};

export default LandingIntroAnimation;
