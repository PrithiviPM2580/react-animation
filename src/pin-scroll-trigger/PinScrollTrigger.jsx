import "./index.css";

const PinScrollTrigger = () => {
  return (
    <main className="main">
      <svg
        viewBox="40% 40%"
        className="services_col_line absolute-center"
        style={{ backgroundColor: "red" }}
      >
        <circle
          height="100%"
          width="100%"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          cx="50%"
          cy="50%"
          r="45%"
        />
      </svg>
    </main>
  );
};

export default PinScrollTrigger;
