import React from "react";

const Button1 = ({ name, bgColor, border, width, color1, fontSize }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: bgColor,
          border: border,
          width: width,
          color: color1,
          fontSize: fontSize,
        }}
      >
        {name}
      </button>
    </>
  );
};

export default Button1;
