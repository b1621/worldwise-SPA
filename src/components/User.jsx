import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className="flex py-1 px-3 gap-4">
      <img className=" rounded-full w-10" src={user.avatar} alt={user.name} />
      <div className="  pt-2">
        <span className="">Welcome, {user.name}</span>
      </div>
      <div className="pt-2">
        <button
          onClick={handleClick}
          className=" bg-slate-500 rounded-md px-3  "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
