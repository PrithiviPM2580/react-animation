import { BrowserRouter, Link } from "react-router-dom";
import TransitionRoutes from "./TransitionRoute";
import "./index.css";

const PageTransitionEffect = () => {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <TransitionRoutes />
    </BrowserRouter>
  );
};

export default PageTransitionEffect;
