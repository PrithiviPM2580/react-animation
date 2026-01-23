import { scrollGrow } from "../constant";
import "./index.css";
import SmoothScrolling from "../SmoothScrolling";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageGrow = () => {
  const containerRef = useRef(null);
  const servicesRef = useRef([]);

  useGSAP(
    () => {
      // Connect Lenis scroll to ScrollTrigger
      const handleScroll = () => {
        ScrollTrigger.update();
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      servicesRef.current.forEach((service) => {
        if (!service) return;

        const imgContainer = service.querySelector(".img");

        // Animation for image width
        ScrollTrigger.create({
          trigger: service,
          start: "bottom bottom",
          end: "top top",
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let newWidth = 30 + 70 * progress;
            gsap.to(imgContainer, {
              width: `${newWidth}%`,
              duration: 0.1,
              ease: "none",
            });
          },
        });

        // Animation for service height
        ScrollTrigger.create({
          trigger: service,
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let newHeight = 150 + 300 * progress;
            gsap.to(service, {
              height: `${newHeight}px`,
              duration: 0.1,
              ease: "none",
            });
          },
        });
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef, dependencies: [servicesRef.current.length] },
  );

  return (
    <SmoothScrolling>
      <div className="container" ref={containerRef}>
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
            <div
              className="service"
              ref={(el) => (servicesRef.current[index] = el)}
              key={index}
            >
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
