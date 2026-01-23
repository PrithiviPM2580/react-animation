import { scrollGrow } from "../constant";
import "./index.css";
import SmoothScrolling from "../SmoothScrolling";

const ScrollImageGrow = () => {
  return (
    <SmoothScrolling>
      <div className="container">
        <section className="hero">
          <h1>Scroll Image Grow</h1>
        </section>
        <section className="services">
          <div className="services-header">
            <div className="col"></div>
            <div className="col">
              <h1>All Services</h1>
            </div>
          </div>
          {scrollGrow.map((service, index) => (
            <div className="service">
              <div className="service-info">
                <h1>{service.title}</h1>
                <p>{service.desc}</p>
              </div>
              <div className="service-img">
                <div className="img">
                  <img src={service.img} alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="footer">
          <h1>Scroll Image Grow</h1>
        </section>
      </div>
    </SmoothScrolling>
  );
};

export default ScrollImageGrow;
