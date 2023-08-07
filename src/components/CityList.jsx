import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";

const CityList = () => {
  const { cities, isLoading } = useCities();
  // const cities = [];
  // console.log("citylist componentt ,cities == ", cities);
  // if (isLoading) return <Spinner />;

  if (!cities.length) {
    return (
      <Message message=" Add your first city by clicking on a city on the map" />
    );
  }
  {
    isLoading && <Spinner />;
  }
  return (
    <ul>
      {cities.map((city) => (
        <>
          <CityItem city={city} key={city.id} />
        </>
      ))}
    </ul>
  );
};

export default CityList;
