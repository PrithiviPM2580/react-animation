import Reveal from "./Reveal";
import "./index.css";
import { data } from "../constant";

const BlockRevealOnScroll = () => {
  return (
    <div className="smooth-scroll-wrapper">
      <div className="content">
        {data.map((item, index) => (
          <div className="container" key={index}>
            <Reveal>
              <h1 className="text">{item.title}</h1>
            </Reveal>
            <Reveal>
              <div className="img">
                <img src={item.img} alt={item.title} />
              </div>
            </Reveal>
            <Reveal>
              <p className="text">{item.desc}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockRevealOnScroll;
