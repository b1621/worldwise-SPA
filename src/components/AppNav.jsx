import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div className="my-5">
      <ul className="flex w-fit mx-auto">
        <li>
          <NavLink
            to="cities"
            className={({ isActive }) =>
              isActive ? `bg-slate-800 px-4 py-1` : "bg-slate-600 px-4 py-1"
            }
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className={({ isActive }) =>
              isActive ? `bg-slate-800 px-4 py-1` : "bg-slate-600 px-4 py-1"
            }
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
