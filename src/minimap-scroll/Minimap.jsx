import React from "react";

const Minimap = ({ images }) => {
  return (
    <div className="minimap">
      <div className="preview">
        {images.map((img, index) => (
          <div
            key={index}
            className="img-thumbnail"
            style={{ left: img.offset }}
          >
            <img
              src={`/images/img${img.index}.png`}
              alt={`Image ${img.index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Minimap;
