import React from "react";

const Message = ({ message }) => {
  return (
    <div className="my-14 ">
      <p className="text-center"> 👋 {message}</p>
    </div>
  );
};

export default Message;
