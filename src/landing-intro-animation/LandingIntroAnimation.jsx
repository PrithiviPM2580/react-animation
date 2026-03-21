import "./style.css";
import { getRandomImage } from "../utils";

const LandingIntroAnimation = () => {
  return (
    <main className="app">
      {/* <div className="container">
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
      </div> */}
      <div className="content">
        <nav>
          <div className="nav-item">
            <a href="#" id="active">
              Work
            </a>
          </div>
          <div className="nav-item">
            <a href="#">About</a>
          </div>
        </nav>
        <div className="hero">
          <div className="icon">
            <span>+</span>
          </div>
          <div className="title">
            <p>The Regeneration Site</p>
          </div>
          <div className="icon-2">
            <span>+</span>
          </div>
        </div>
        <footer>
          <div className="preview">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                src={`/images/img${i + 1}.png`}
                alt={`Image ${i + 1}`}
                key={i}
              />
            ))}
          </div>
          <div className="slide-num">
            <p>1 &mdash; 3</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingIntroAnimation;
