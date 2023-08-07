import React from "react";

const ButtonMap = ({ children, onClick, addClass, type = "" }) => {
  return (
    <button
      className={`border border-slate-500 px-4  hover:bg-slate-800 rounded-md ${addClass} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonMap;
