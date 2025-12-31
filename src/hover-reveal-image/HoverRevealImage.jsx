import "./index.css";
import { hoverRevealImages } from "../constant";

const HoverRevealImage = () => {
  return (
    <div class="container">
      <div class="navs">
        <h1 class="logo">Logo</h1>
        <h1 class="name">Prithivi</h1>
        <div class="link">
          <h1>Home</h1>
          <h1>Contact</h1>
          <h1>Shop</h1>
        </div>
      </div>

      <div class="details">
        <div class="details-text">
          <h2>
            Eleveted <br />
            Details
          </h2>
          <p>View Showreel</p>
        </div>
        <h1>/All Projects</h1>
      </div>

      <div class="wrapper">
        <div class="img">
          <img src="" alt="" />
        </div>
        <div class="text">
          {hoverRevealImages.map((item, index) => (
            <div class="text-img" data-img={item.dataImg} key={index}>
              <h1>{item.tag}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverRevealImage;
