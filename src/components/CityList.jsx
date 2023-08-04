import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import Spinner from "./Spinner";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <div className=" my-14 mx-5">
        <p className="text-center">
          🖐 Add your first city by clicking on a city on the map
        </p>
      </div>
    );
  return (
    <ul>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
