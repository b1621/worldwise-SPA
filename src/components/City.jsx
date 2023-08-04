import { useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = () => {
  const { id } = useParams();
  const { getCity, currentCity } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div>
      <div>
        <h6>City name</h6>
        <h3>
          <span> {emoji} </span> {cityName}
        </h3>
      </div>
      {notes && (
        <div className=" border my-2">
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}
      <div>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className=" text-blue-500"
        >
          Check out {cityName} on wikipedia &rarr;{" "}
        </a>
      </div>
    </div>
  );
};

export default City;
