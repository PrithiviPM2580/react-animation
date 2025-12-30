import { useEffect, useRef } from "react";

const useReveal = (threshold = 0.3) => {
  const revealRef = useRef(null);
  let revel;

  useEffect(() => {
    const elements = revealRef.current;
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          } else {
            entry.target.classList.remove("reveal");
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(elements);

    return () => {
      if (elements) {
        observer.unobserve(elements);
      }
    };
  }, [threshold]);

  return { revealRef, revel };
};

export default useReveal;
