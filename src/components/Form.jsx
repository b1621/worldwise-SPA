import { useState } from "react";
import ButtonMap from "./ButtonMap";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  return (
    <div className=" p-5 my-10 bg-slate-700">
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-sm">City name</label>

        <input
          className=" outline-none border bg-slate-200 text-gray-800 px-3 py-1 rounded-md text-sm"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
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
