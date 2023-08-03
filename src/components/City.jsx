import { useParams, useSearchParams } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const City = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };
  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div>
      <p>city id {id}</p>
      <h2>
        Position:{lat}:{lng}
      </h2>
    </div>
  );
};

export default City;
