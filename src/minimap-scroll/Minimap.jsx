const Minimap = ({ images, thumbnailRefs }) => {
  return (
    <div className="minimap">
      <div className="preview">
        {images.map((img, index) => (
          <div
            key={index}
            className="img-thumbnail"
            style={{ left: img.offset }}
            ref={(el) => (thumbnailRefs.current[index] = el)}
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
