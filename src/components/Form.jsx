import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ButtonMap from "./ButtonMap";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const Form = () => {
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  // const [startDate, setStartDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😏"
            );
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
          // console.log(data);
        } catch (err) {
          console.log(err);
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng) return <Message message="Start by clicking on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <div className=" p-5 my-10 bg-slate-700">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <label htmlFor="city" className="mb-1 text-sm">
            City name
          </label>

          <div className="relative">
            <input
              id="city"
              className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm w-full"
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <span className="absolute right-2">{emoji}</span>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="date" className="mb-1 text-sm">
            When did you go to ?
          </label>

          {/* <input
            className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          /> */}
          <DatePicker
            id="date"
            className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm w-full"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="note" className="mb-1 text-sm">
            Notes about your trip to{" "}
          </label>

          <input
            id="note"
            className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm"
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="flex justify-between mt-7 font-thin">
          {/* <ButtonMap addClass=" text-green-500  ">Add</ButtonMap> */}
          <button
            className={`px-4 py-1 bg-green-500 rounded-md font-normal ${
              isLoading && "bg-green-700"
            }`}
            disabled={isLoading ? true : false}
          >
            Add{" "}
          </button>

          <ButtonMap
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <span>&larr;</span> Back
          </ButtonMap>
        </div>
      </form>
    </div>
  );
};

export default Form;
