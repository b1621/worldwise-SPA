import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import ButtonMap from "./ButtonMap";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;
  return (
    <div className=" p-4 rounded-lg bg-slate-700">
      <div className="mb-4">
        <h6 className=" text-sm text-slate-400">City name</h6>
        <h3>
          <span> {emoji} </span> {cityName}
        </h3>
      </div>
      <div className="mb-4">
        <h6 className=" text-sm mt-2 text-slate-400">You went to {cityName}</h6>
        <p>{formatDate(date || null)}</p>
      </div>
      {notes && (
        <div className="  my-3">
          <h6 className=" text-sm text-slate-400">Your notes</h6>
          <p>{notes}</p>
        </div>
      )}
      <div className="my-3">
        <h6 className=" text-sm text-slate-400">Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className=" text-blue-500 hover:text-blue-400"
        >
          Check out {cityName} on wikipedia &rarr;{" "}
        </a>
      </div>
      <div>
        <ButtonMap
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <span>&larr;</span> Back
        </ButtonMap>
      </div>
    </div>
  );
};

export default City;
