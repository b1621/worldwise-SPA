import Logo from "./Logo";
import AppNav from "../components/AppNav";

const Sidebar = () => {
  return (
    <div className="w-80  h-screen bg-slate-700  text-white">
      <div className="flex flex-col justify-between h-full p-5">
        <div>
          <Logo />
          <AppNav />
          <p>List of Cities</p>
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
