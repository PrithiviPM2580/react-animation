import "./index.css";

const ParallexImageMouseMove = () => {
  // Define grid positions for 5x5 grid (25 items total)
  const positions = [
    { col: 1, row: 1 },
    { col: 1, row: 2 },
    { col: 1, row: 3 },
    { col: 1, row: 4 },
    { col: 1, row: 5 },
    { col: 2, row: 1 },
    { col: 2, row: 2 },
    { col: 2, row: 3 },
    { col: 2, row: 4 },
    { col: 2, row: 5 },
    { col: 3, row: 1 },
    { col: 3, row: 2 },
    { col: 3, row: 3 },
    { col: 3, row: 4 },
    { col: 3, row: 5 },
    { col: 4, row: 1 },
    { col: 4, row: 2 },
    { col: 4, row: 3 },
    { col: 4, row: 4 },
    { col: 4, row: 5 },
    { col: 5, row: 1 },
    { col: 5, row: 2 },
    { col: 5, row: 3 },
    { col: 5, row: 4 },
    { col: 5, row: 5 },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>Parallex Image Mouse Move</h1>
        <p>Move your mouse over the image to see the parallax effect.</p>
        <div>
          <button>Click Me</button>
        </div>
      </div>
      <div className="gallery">
        {positions.map((pos, i) => {
          const index = (i % 6) + 1;
          return (
            <div
              className="item"
              key={i}
              style={{
                gridColumn: pos.col,
                gridRow: pos.row,
              }}
            >
              <img src={`./images/img${index}.png`} alt={`Image ${index}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallexImageMouseMove;
