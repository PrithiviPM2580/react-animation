import React from "react";

const Images = ({ images }) => {
  return (
    <div className="images">
      {images.map((img, index) => (
        <div key={index} className="img">
          <img src={`/images/img${img.index}.png`} alt={`Image ${img.index}`} />
        </div>
      ))}
    </div>
  );
};

export default Images;
