const Header = ({ menuIsActive, setMenuIsActive }) => {
  return (
    <div className="header">
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
        className={`burger ${menuIsActive ? "burgerActive" : ""}`}
      ></div>
    </div>
  );
};

export default Header;
