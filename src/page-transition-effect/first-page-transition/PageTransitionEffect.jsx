import { BrowserRouter } from "react-router-dom";
import TransitionRoutes from "./TransitionRoutes";
import "./index.css";

const PageTransitionEffect = () => {
  return (
    <BrowserRouter>
      <TransitionRoutes />
    </BrowserRouter>
  );
};

export default PageTransitionEffect;
