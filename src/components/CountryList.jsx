import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

const CountryList = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <div className=" my-14 mx-5">
        <p className="text-center">
          🖐 Add your first country by clicking on a country on the map
        </p>
      </div>
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className="grid  gap-x-8 grid-cols-2">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
