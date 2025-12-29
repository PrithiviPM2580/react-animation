import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import "./index.css";

// Move static data outside component to prevent recreation on every render
const projectData = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/img1.webp",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    image: "/images/img2.webp",
  },
  {
    title: "Data Analytics Dashboard",
    category: "Data Visualization",
    image: "/images/img3.webp",
  },
  {
    title: "AI Chat Assistant",
    category: "Machine Learning",
    image: "/images/img4.webp",
  },
  {
    title: "Social Media Feed",
    category: "Frontend Development",
    image: "/images/img5.webp",
  },
];

const MouseMove = () => {
  const cursorRef = useRef(null);
  const imgRef = useRef(null);
  const projectRefs = useRef([]);
  const moveXRef = useRef(null);
  const moveYRef = useRef(null);

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    projectData.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  const handleMouseEnter = useCallback((imageSrc) => {
    const cursor = cursorRef.current;
    const img = imgRef.current;

    if (!cursor || !img) return;

    setCurrentImage(imageSrc);

    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.fromTo(
      img,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const projects = projectRefs.current;

    if (!cursor) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0,
    });

    moveXRef.current = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    moveYRef.current = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const mouseMove = (e) => {
      if (moveXRef.current && moveYRef.current) {
        moveXRef.current(e.clientX);
        moveYRef.current(e.clientY);
      }
    };

    document.addEventListener("mousemove", mouseMove);

    const handlers = projects.map((project, index) => {
      const enter = () => handleMouseEnter(projectData[index].image);
      const leave = () => handleMouseLeave();

      project.addEventListener("mouseenter", enter);
      project.addEventListener("mouseleave", leave);

      return { project, enter, leave };
    });

    return () => {
      document.removeEventListener("mousemove", mouseMove);
      handlers.forEach(({ project, enter, leave }) => {
        project.removeEventListener("mouseenter", enter);
        project.removeEventListener("mouseleave", leave);
      });
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <>
      <div className="cursor" ref={cursorRef}>
        <img ref={imgRef} src={currentImage} alt="" />
      </div>

      <div className="wrapper">
        <div className="project-list">
          {projectData.map((project, index) => (
            <div
              key={project.title}
              className="project"
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <h1>{project.title}</h1>
              <p>{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MouseMove;
