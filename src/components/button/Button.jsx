import React from "react";

const Button = ({ color, text, onClick, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      className={`btn ${color}-btn ${isDisabled ? "disabled" : "avaliable"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
