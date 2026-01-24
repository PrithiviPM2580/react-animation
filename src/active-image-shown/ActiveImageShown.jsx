import { useEffect, useRef } from "react";
import "./index.css";

const TOTAL_IMAGES = 6;
const TOTAL_ITEMS = 100;

export default function ActiveImageShown() {
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);
  const activeImgRef = useRef(null);
  const imgCacheRef = useRef({}); // Cache image sources

  const currentX = useRef(0);
  const targetX = useRef(0);
  const lastActiveIndex = useRef(-1);
  const itemWidth = useRef(0);
  const animationFrameId = useRef(null);
  const isAnimating = useRef(false);

  // Lerp helper
  const lerp = (start, end, t) => start * (1 - t) + end * t;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Measure item width once
    itemWidth.current = itemsRef.current[0]?.offsetWidth || 0;

    // Cache image sources
    itemsRef.current.forEach((item, i) => {
      const img = item?.querySelector("img");
      if (img) {
        imgCacheRef.current[i] = img.src;
      }
    });

    // Throttled wheel handler
    let wheelTimeout;
    const onWheel = (e) => {
      targetX.current += e.deltaY;
      const maxScroll = carousel.scrollWidth - window.innerWidth;
      targetX.current = Math.max(0, Math.min(targetX.current, maxScroll));

      // Start animation if not already running
      if (!isAnimating.current) {
        isAnimating.current = true;
        animate();
      }

      // Debounce to stop animation after scrolling ends
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        isAnimating.current = false;
      }, 150);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    const animate = () => {
      currentX.current = lerp(currentX.current, targetX.current, 0.1);
      carousel.style.transform = `translate3d(${-currentX.current}px, 0, 0)`;

      const index = Math.round(currentX.current / itemWidth.current);

      if (index !== lastActiveIndex.current && itemsRef.current[index]) {
        if (lastActiveIndex.current !== -1) {
          itemsRef.current[lastActiveIndex.current].classList.remove("active");
        }

        const item = itemsRef.current[index];
        item.classList.add("active");

        // Use cached image source
        activeImgRef.current.src = imgCacheRef.current[index];
        lastActiveIndex.current = index;
      }

      if (isAnimating.current) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      clearTimeout(wheelTimeout);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="carousal-items" ref={carouselRef}>
          {Array.from({ length: TOTAL_ITEMS }).map((_, i) => {
            const index = (i % TOTAL_IMAGES) + 1;

            return (
              <div
                className="carousal-item"
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
              >
                <img src={`../images/img${index}.png`} />
              </div>
            );
          })}
        </div>

        <div className="active-item">
          <img ref={activeImgRef} />
        </div>
      </div>

      <footer>
        <p>Design by Prithivi</p>
        <p>Portfolio Work</p>
      </footer>
    </>
  );
}
