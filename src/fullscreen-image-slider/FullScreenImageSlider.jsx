import "./index.css";

const FullScreenImageSlider = () => {
  return (
    <>
      <div className="slider-content">
        <div className="slide-number">
          <div className="prefix">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
          <div className="postfix">
            <span>/</span> 5
          </div>
        </div>
        <div className="slide-name">
          <div className="names">
            {[
              "Ether Shift Mode",
              "Solar Thread",
              "Quantam Sheil Veil",
              "Flux Aura",
              "Echo Nimbus",
            ].map((name, index) => (
              <div key={index}>{name}</div>
            ))}
          </div>
        </div>
        <div className="slide-year">
          <div className="years">
            {["2021", "2022", "2023", "2024", "2025"].map((year, index) => (
              <div key={index}>{year}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="slide" id={`slide-${index + 1}`} key={index}>
            <img
              src={`./images/img${index + 1}.png`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FullScreenImageSlider;
