import { useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  // console.log(lat, "  = ", lng);

  return (
    <div className=" bg-slate-500 w-full">
      <h1>Map</h1>
      <h2>
        Position:{lat}:{lng}
      </h2>
    </div>
  );
};

export default Map;
