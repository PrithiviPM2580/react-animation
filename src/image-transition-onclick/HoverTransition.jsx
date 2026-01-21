const HoverTransition = ({ itemData, active, setActive, handleTransition }) => {
  return (
    <div className="img-container">
      <div className="text-container">
        {itemData.map((item, index) => (
          <div
            className="text"
            key={index}
            onMouseEnter={() => setActive(item)}
            onClick={() => {
              setActive(item);
              handleTransition();
            }}
          >
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="image-container">
        <div className="img">
          <img src={active.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HoverTransition;
