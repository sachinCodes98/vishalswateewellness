import React from "react";
import "./heading1.css";

const Heading1 = (props) => {
  const { classProp, contentName } = props;
  return <p className={classProp}>{contentName}</p>;
};

export default Heading1;
