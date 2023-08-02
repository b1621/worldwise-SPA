import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <nav className="border ">
      <ul className=" flex w-fit mx-auto gap-10 ">
        <li className="active:text-red-800">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="active:text-red-800">
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className="active:text-red-800">
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
