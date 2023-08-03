import React from "react";

const ButtonMap = ({ children, onClick, type }) => {
  return (
    <button
      className={`border border-slate-500 px-4  hover:bg-slate-800 rounded-md ${type} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonMap;
