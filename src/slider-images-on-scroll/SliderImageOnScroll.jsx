const SliderImageOnScroll = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="logo">PPM</div>
        <div className="menu">Menu</div>
      </div>
      <div className="footer">
        <p>Design by PPM</p>
        <p>Future Projects</p>
      </div>

      <div className="slider">
        {[...Array(6)].map((_, index) => (
          <div className="slide" id={`slide-${index + 1}`}>
            <div className="img">
              <img
                src={`./images/img${index + 1}.png`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderImageOnScroll;
