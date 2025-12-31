import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Practice() {
  const [count, setCount] = useState(1);
  const boxRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        boxRef.current,
        { x: 0 }, // start from
        { x: count * 50, duration: 0.5 } // animate to
      );
    },
    { dependencies: [count], revertOnUpdate: false }
  );

  return (
    <div style={{ padding: "50px" }}>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <div
        ref={boxRef}
        style={{
          width: 50,
          height: 50,
          background: "red",
          marginTop: 20,
        }}
      />
    </div>
  );
}

export default Practice;
