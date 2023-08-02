import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const HomePage = () => {
  return (
    //style={{ backgroundImage: url("bg.jpg") }}
    <main
      className=" relative bg-cover bg-center min-h-screen overflow-hidden text-white"
      style={{ backgroundImage: `url(${"bg.jpg"})` }}
    >
      <section className="Absolute top-0 left-0 bottom-0  bg-gray-800 bg-opacity-70 h-screen">
        <PageNav />

        <div className="text-center max-w-[600px] my-32 mx-auto">
          <h1 className="text-5xl font-bold ">
            You travel the world. <br /> WorldWise Keeps track of your
            adventure.
          </h1>
          <h2 className=" text-sm my-10">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences and show your friends
            how you have wandered the world.
          </h2>

          <Link
            to="/app"
            className="  rounded-md px-5 py-2 text-black text-md font-normal shadow-md hover:bg-emerald-600 bg-emerald-500"
          >
            Start tracking now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
