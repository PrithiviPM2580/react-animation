import React from "react";

const Images = ({ images, fullImageRefs }) => {
  return (
    <div className="images">
      {images.map((img, index) => (
        <div
          key={index}
          className="img"
          ref={(el) => (fullImageRefs.current[index] = el)}
        >
          <img src={`/images/img${img.index}.png`} alt={`Image ${img.index}`} />
        </div>
      ))}
    </div>
  );
};

export default Images;
