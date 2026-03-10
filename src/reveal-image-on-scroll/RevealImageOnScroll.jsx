import "./style.css";

const RevealImageOnScroll = () => {
  return (
    <div className="container">
      <div className="row" id="row-1">
        <div className="col">
          <div className="img-container right">
            <img src="/images/img1.png" alt="" />
            <p>Image 1</p>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row" id="row-2">
        <div className="col"></div>
        <div className="col">
          <div className="img-container left">
            <img src="/images/img5.png" alt="" />
            <p>Image 6</p>
          </div>
        </div>
      </div>
      <div className="row" id="row-3">
        <div className="col">
          <div className="img-container right">
            <img src="/images/img2.png" alt="" />
            <p>Image 2</p>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row" id="row-4">
        <div className="col"></div>
        <div className="col">
          <div className="img-container left">
            <img src="/images/img4.png" alt="" />
            <p>Image 7</p>
          </div>
        </div>
      </div>
      <div className="row" id="row-5">
        <div className="col">
          <div className="img-container right">
            <img src="/images/img3.png" alt="" />
            <p>Image 3</p>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row" id="row-6">
        <div className="col"></div>
        <div className="col">
          <div className="img-container left">
            <img src="/images/img1.png" alt="" />
            <p>Image 8</p>
          </div>
        </div>
      </div>
      <div className="row" id="row-7">
        <div className="col">
          <div className="img-container right">
            <img src="/images/img4.png" alt="" />
            <p>Image 4</p>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row" id="row-8">
        <div className="col"></div>
        <div className="col">
          <div className="img-container left">
            <img src="/images/img2.png" alt="" />
            <p>Image 9</p>
          </div>
        </div>
      </div>
      <div className="row" id="row-9">
        <div className="col">
          <div className="img-container right">
            <img src="/images/img5.png" alt="" />
            <p>Image 5</p>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row" id="row-10">
        <div className="col"></div>
        <div className="col">
          <div className="img-container left">
            <img src="/images/img3.png" alt="" />
            <p>Image 10</p>
          </div>
        </div>
      </div>
      <div className="whitespace"></div>
    </div>
  );
};

export default RevealImageOnScroll;
