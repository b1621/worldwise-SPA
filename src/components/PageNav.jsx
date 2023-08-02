import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const PageNav = () => {
  return (
    <nav className=" flex flex-row justify-between py-5 px-14">
      <Logo />
      <ul className=" flex w-fit gap-10 ">
        <li className="active:text-red-800 text-emerald-500">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="active:text-red-800">
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className="active:text-red-800">
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className=" px-7 py-2 bg-emerald-500 rounded-md hover:bg-emerald-600"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
