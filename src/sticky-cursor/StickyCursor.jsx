import { useRef } from "react";
import Cursor from "./Cursor";
import Header from "./Header";
import "./index.css";

const StickyCursor = () => {
  const stickyRef = useRef(null);

  return (
    <main>
      <Header ref={stickyRef} />
      <Cursor stickyRef={stickyRef} />
    </main>
  );
};

export default StickyCursor;
