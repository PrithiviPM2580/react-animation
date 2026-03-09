import "./style.css";

const ImageSliderClipPath = () => {
  return (
    <>
      <div className="slider-content">
        <div className="slide-number">
          <div className="prefix">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
          <div className="postfix">
            <span>/</span> 5
          </div>
        </div>
        <div className="slide-name">
          <div className="names">
            <div>Ether Shift Mode</div>
            <div>Solar Thread</div>
            <div>Quantum Sheen Veil</div>
            <div>Flux Aura</div>
            <div>Echo Nimbus</div>
          </div>
        </div>
        <div className="slide-year">
          <div className="years">
            <div>2020</div>
            <div>2021</div>
            <div>2022</div>
            <div>2023</div>
            <div>2024</div>
          </div>
        </div>
      </div>
      <div className="slider">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="slide" key={index} id={`slide-${index + 1}`}>
            <img
              src={`/images/img${index + 1}.png`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSliderClipPath;
