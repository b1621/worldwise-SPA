import Logo from "./Logo";
import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[500px]  h-screen bg-slate-800  text-white">
      <div className="flex flex-col justify-between h-full p-5">
        <div>
          <div className=" ml-9">
            <Logo />
          </div>

          <AppNav />

          <Outlet />
        </div>
        <div>
          <footer>
            <p className=" text-sm text-slate-300">
              &copy; Copyright {new Date().getFullYear()} by Worldwise inc
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
