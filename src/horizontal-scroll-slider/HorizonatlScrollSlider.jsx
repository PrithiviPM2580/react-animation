import "./index.css";

const HorizonatlScrollSlider = () => {
  return (
    <>
      <nav>
        <div>Logo</div>
        <div>Menu</div>
      </nav>
      <div className="marker-wrapper">
        <div className="marker">
          <div className="grab"></div>
        </div>
        <div className="active-slide">1/10</div>
      </div>

      <div className="slider">
        <div className="slider-wrapper">
          {[...Array(10)].map((_, index) => (
            <div className="slide">
              <img
                src={`./images/img${index + 1}.png`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p>PPM 2026 &copy;</p>
        <p>Creative Team</p>
      </footer>
    </>
  );
};

export default HorizonatlScrollSlider;
