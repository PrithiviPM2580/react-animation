import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import {
  NAV_LEGAL,
  NAV_PRIMARY_LINKS,
  NAV_SECONDARY_LINKS,
  NAV_SOCIALS,
} from "../constant";
import "./style.css";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const MenuRevealAnimation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const tl = useRef(null);
  const contentRef = useRef(null);

  const linkBlocks = [
    ".nav-socials .line, .nav-legal .line",
    ".nav-primary-links .line",
    ".nav-secondary-links .line",
  ];

  useGSAP(
    () => {
      const splittedText = new SplitText(".nav-items a", {
        type: "lines",
        mask: "lines",
        linesClass: "line",
      });

      tl.current = gsap.timeline({
        paused: true,
        onComplete: () => {
          setIsAnimating(false);
        },
        onReverseComplete: () => {
          gsap.set(linkBlocks.join(", "), { y: "100%" });
          setIsAnimating(false);
        },
      });

      tl.current.to(".nav-bg", {
        scale: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.inOut",
      });

      tl.current.to(
        ".nav-items",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.75,
          ease: "power3.inOut",
        },
        "-=0.6",
      );

      () => {
        splittedText.revert();
      };
    },
    { scope: contentRef },
  );

  function handleClick() {
    if (isAnimating) return;
    setIsAnimating(true);

    if (!isMenuOpen) {
      tl.current.play();
      animateLinksIn();
    } else {
      tl.current.reverse();
    }
    setIsMenuOpen(!isMenuOpen);
  }

  function animateLinksIn() {
    linkBlocks.forEach((selector) => {
      gsap.fromTo(
        selector,
        { y: "100%" },
        {
          y: "0%",
          duration: 0.75,
          stagger: 0.05,
          ease: "power3.inOut",
          delay: 0.5,
        },
      );
    });
  }

  return (
    <>
      <nav>
        <div className="nav-logo">
          <p>PPM</p>
        </div>
        <div className="nav-toggler" onClick={handleClick}>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="nav-content" ref={contentRef}>
        <div className="nav-bg"></div>
        <div className="nav-bg"></div>
        <div className="nav-bg"></div>
        <div className="nav-bg"></div>

        <div className="nav-items">
          <div className="nav-items-col">
            <div className="nav-socials">
              {NAV_SOCIALS.map((social, index) => (
                <a href="#" key={index}>
                  {social}
                </a>
              ))}
            </div>
            <div className="nav-legal">
              {NAV_LEGAL.map((legal, index) => (
                <a href="#" key={index}>
                  {legal}
                </a>
              ))}
            </div>
          </div>
          <div className="nav-items-col">
            <div className="nav-primary-links">
              {NAV_PRIMARY_LINKS.map((link, index) => (
                <a href="#" key={index}>
                  {link}
                </a>
              ))}
            </div>
            <div className="nav-secondary-links">
              {NAV_SECONDARY_LINKS.map((link, index) => (
                <a href="#" key={index}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero"></div>
    </>
  );
};

export default MenuRevealAnimation;

// import { useState, useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
// import {
//   NAV_LEGAL,
//   NAV_PRIMARY_LINKS,
//   NAV_SECONDARY_LINKS,
//   NAV_SOCIALS,
// } from "../constant";
// import "./style.css";

// gsap.registerPlugin(SplitText);

// const MenuRevealAnimation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const tl = useRef(null);
//   const contentRef = useRef(null);

//   const linkBlocks = [
//     ".nav-socials .line, .nav-legal .line",
//     ".nav-primary-links .line",
//     ".nav-secondary-links .line",
//   ];

//   useGSAP(
//     () => {
//       // SplitText creates .line for each line in the nav links
//       const splittedText = new SplitText(".nav-items a", {
//         type: "lines",
//         mask: "lines",
//         linesClass: "line",
//       });

//       // Timeline setup
//       tl.current = gsap.timeline({
//         paused: true,
//         onComplete: () => setIsAnimating(false),
//         onReverseComplete: () => {
//           gsap.set(linkBlocks.join(", "), { y: "100%" });
//           setIsAnimating(false);
//         },
//       });

//       // Animate nav background elements
//       tl.current.to(".nav-bg", {
//         scale: 1,
//         duration: 0.75,
//         stagger: 0.1,
//         ease: "power3.inOut",
//       });

//       // Animate nav items (clip-path reveal)
//       tl.current.to(
//         ".nav-items",
//         {
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//           duration: 0.75,
//           ease: "power3.inOut",
//         },
//         "-=0.6"
//       );

//       // Animate the links in the timeline (batched for performance)
//       tl.current.to(
//         linkBlocks.join(", "),
//         {
//           y: "0%",
//           duration: 0.75,
//           stagger: 0.05,
//           ease: "power3.inOut",
//           delay: 0.5,
//         },
//         "-=0.5"
//       );

//       // 🔹 Cleanup SplitText on unmount
//       return () => {
//         splittedText.revert();
//       };
//     },
//     { scope: contentRef }
//   );

//   // Handle menu toggle
//   const handleClick = () => {
//     if (isAnimating) return; // Prevent double clicks
//     setIsAnimating(true);

//     if (!isMenuOpen) {
//       tl.current.play();
//     } else {
//       tl.current.reverse();
//     }

//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <nav>
//         <div className="nav-logo">
//           <p>PPM</p>
//         </div>
//         <div className="nav-toggler" onClick={handleClick}>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>

//       <div className="nav-content" ref={contentRef}>
//         <div className="nav-bg"></div>
//         <div className="nav-bg"></div>
//         <div className="nav-bg"></div>
//         <div className="nav-bg"></div>

//         <div className="nav-items">
//           <div className="nav-items-col">
//             <div className="nav-socials">
//               {NAV_SOCIALS.map((social, index) => (
//                 <a href="#" key={index}>
//                   {social}
//                 </a>
//               ))}
//             </div>
//             <div className="nav-legal">
//               {NAV_LEGAL.map((legal, index) => (
//                 <a href="#" key={index}>
//                   {legal}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="nav-items-col">
//             <div className="nav-primary-links">
//               {NAV_PRIMARY_LINKS.map((link, index) => (
//                 <a href="#" key={index}>
//                   {link}
//                 </a>
//               ))}
//             </div>
//             <div className="nav-secondary-links">
//               {NAV_SECONDARY_LINKS.map((link, index) => (
//                 <a href="#" key={index}>
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="hero"></div>
//     </>
//   );
// };

// export default MenuRevealAnimation;
