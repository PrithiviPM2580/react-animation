const paragraph = [
  "Elegant Design",
  "Modern Interface",
  "Creative Solutions",
  "User Friendly",
  "Premium Quality",
];
const RevealSidePage = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="img">
          <img src="./images/img4.webp" alt="" />
        </div>
        {paragraph.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className="right-side">
        <div className="images">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="img" key={index}>
              <img src={`./images/img${index + 1}.webp`} alt="" />
            </div>
          ))}
        </div>
        <h1>Gorgeoushe</h1>
      </div>
    </div>
  );
};

export default RevealSidePage;
