import { useEffect, useState } from "react";
import ButtonMap from "./ButtonMap";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Spinner from "./Spinner";

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

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
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

  if (isLoadingGeocoding) return <Spinner />;
  if (geocodingError) return <p>{geocodingError}</p>;
  return (
    <div className=" p-5 my-10 bg-slate-700">
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-sm">City name</label>

        <div className="relative">
          <input
            className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm w-full"
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <span className="absolute right-2">{emoji}</span>
        </div>
      </div>
      <div className="flex flex-col my-3">
        <label className="mb-1 text-sm">When did you go to ?</label>

        <input
          className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-3">
        <label className="mb-1 text-sm">Notes about your trip to </label>

        <input
          className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="flex justify-between mt-7 font-thin">
        <ButtonMap type="">Add</ButtonMap>

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

export default Form;
