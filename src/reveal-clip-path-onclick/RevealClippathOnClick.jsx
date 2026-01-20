import "./index.css";

const RevealClippathOnClick = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">PPM</div>
          <div className="navs">
            <p>Home</p>
            <p>Shop</p>
            <p>Cart</p>
          </div>
        </nav>
        <h1>Welcome to PPM</h1>
        <div className="loader">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="img">
              <img
                src={`../images/img${index + 1}.png`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RevealClippathOnClick;
