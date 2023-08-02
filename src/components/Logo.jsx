import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <img src="/logo.png" alt="worldwise logo" className="w-40" />
      </NavLink>
    </>
  );
};

export default Logo;
