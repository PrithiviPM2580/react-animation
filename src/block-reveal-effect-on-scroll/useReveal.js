import { useState, useEffect, useRef } from "react";

const useReveal = (threshold = 0.3) => {
  const revealRef = useRef(null);
  const [revel, setReveal] = useState(false);

  useEffect(() => {
    const elements = revealRef.current;
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReveal(true);
          } else {
            setReveal(false);
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
