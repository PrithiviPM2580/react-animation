import "./index.css";

const AwwardsNav = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="navs"></div>
        <div className="btns">
          {["More", "Home", "Nominees", "Directory", "Collection"].map(
            (btnText, index) => {
              return (
                <button key={index} className="btn" id={`btn-${index + 1}`}>
                  {" "}
                  {index === 0 ? <span>&#9776;</span> : null}
                  {btnText}
                </button>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default AwwardsNav;
