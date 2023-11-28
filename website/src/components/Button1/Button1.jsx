import React from "react";

const Button1 = ({ name, bgColor, border, width, color1, fontSize, height }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: bgColor,
          border: border,
          width: width,
          color: color1,
          fontSize: fontSize,
          cursor:'pointer',
          height:height
        }}
      >
        {name}
      </button>
    </>
  );
};

export default Button1;
