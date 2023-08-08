import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

const AppLayout = () => {
  return (
    <div className="relative flex min-h-[100vh]">
      <Sidebar />
      <Map />
      <div className="absolute right-5 top-5 z-40 rounded text-white bg-slate-600 ">
        <User />
      </div>
    </div>
  );
};

export default AppLayout;
