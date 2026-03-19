import Images from "./Images";
import Minimap from "./Minimap";
import "./style.css";

const MinimapScroll = () => {
  return (
    <div className="container">
      <nav>
        <p>PPM</p>
        <button>Sign Up</button>
      </nav>
      <div className="section">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut
          officiis ex architecto perferendis minima eaque autem et. Possimus
          consectetur nulla corporis excepturi dolor dignissimos sunt fugiat
          ducimus! Consequuntur, ut.
        </h1>
      </div>
      <div className="gallery">
        {Array.from({ length: 10 }).map((_index) => (
          <>
            <Minimap />
            <Images />
          </>
        ))}
      </div>
      <div className="section">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut
          officiis ex architecto perferendis minima eaque autem et. Possimus
          consectetur nulla corporis excepturi dolor dignissimos sunt fugiat
          ducimus! Consequuntur, ut.
        </h1>
      </div>
    </div>
  );
};

export default MinimapScroll;
