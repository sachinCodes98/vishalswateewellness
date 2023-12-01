import React from "react";
import "../Button1/button1.css"
import "../Button1/button2.css"


const Button1 = ({ name, classProp }) => {
  return (
    <>
      <button
      className={classProp}
      >
        {name}
      </button>
    </>
  );
};

export default Button1;
