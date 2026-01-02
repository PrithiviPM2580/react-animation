import "./index.css";

const TextHoverImageReveal = () => {
  return (
    <div className="container">
      <div className="nav">
        <div class="logo">Logo</div>
        <div class="name">PPM</div>
        <div class="link">
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
        </div>
      </div>
      <div class="text">
        <h1>Reach the fullest</h1>
      </div>
      <div className="images">
        {Array.from({ length: 6 }).map((_, index) => (
          <div class="image image1">
            <img
              src={`../images/img${index + 1}.webp`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextHoverImageReveal;
