import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  color: PropTypes.string.isRequired,
};

export default function TokenSquare(props) {
  return <div style={{ backgroundColor: props.color, height: "25px", width: "50px", borderRadius: "3px" }} />;
}

TokenSquare.propTypes = propTypes;
