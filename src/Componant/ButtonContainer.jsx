import React from "react";
import "./ButtonContainer.css";
function ButtonContainer({ onButtonClick }) {
  const calcultor = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className="mainbtn">
        {calcultor.map((item, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={() => onButtonClick(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default ButtonContainer;
