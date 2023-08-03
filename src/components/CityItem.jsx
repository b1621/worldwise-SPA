import { Link } from "react-router-dom";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className="flex justify-between bg-slate-700 my-3 px-3 py-2 rounded-md border-l-4 border-emerald-500"
      >
        <div>
          <h3>
            {" "}
            <span className=" pr-2">{emoji}</span> {cityName}
          </h3>
        </div>
        <div>
          <time className="text-sm pt-1"> {formatDate(date)} </time>
          <button className="ml-2 text-slate-300 hover:text-slate-900 text-lg">
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
};

export default CityItem;
