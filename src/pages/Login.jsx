import PageNav from "../components/PageNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

// import { useAuth } from "../contexts/FakeAuthContext";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  // const { login, isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (email && password) login(email, password);
  // }

  // useEffect(
  //   function () {
  //     if (isAuthenticated) navigate("/app", { replace: true });
  //   },
  //   [isAuthenticated, navigate]
  // );
  return (
    <main className="h-screen bg-slate-700 ">
      <PageNav />

      <form className=" w-[500px] bg-slate-600 my-36 mx-auto p-10 ">
        <div className="grid grid-cols-3 mb-4">
          <label className="text-white" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="border bg-slate-200 outline-none px-3 py-1 col-span-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="grid grid-cols-3 mb-5">
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border bg-slate-200 outline-none px-3 py-1 col-span-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          {/* <Button type="primary">Login</Button> */}
          <Button>Login</Button>
        </div>
      </form>
    </main>
  );
};

export default Login;
