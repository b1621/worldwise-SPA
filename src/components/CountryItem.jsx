import React from "react";

const CountryItem = ({ country }) => {
  return (
    <li className="flex flex-col bg-slate-600 my-3 px-3 py-2 rounded-md border-l-4 border-emerald-500 inline-block ">
      <span> {country.emoji} </span>
      <span> {country.country} </span>
    </li>
  );
};

export default CountryItem;
