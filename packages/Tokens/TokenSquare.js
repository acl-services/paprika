import React from "react";
import { string } from "prop-types";

const propTypes = {
  color: string.isRequired,
};

export default function TokenSquare(props) {
  return <div style={{ backgroundColor: props.color, height: "25px", width: "50px", borderRadius: "3px" }} />;
}

TokenSquare.propTypes = propTypes;
