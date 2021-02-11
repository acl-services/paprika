import React from "react";
import PropTypes from "prop-types";

export default function Counter(props) {
  const { value } = props;

  return <span>{value}</span>;
}

const propTypes = {
  value: PropTypes.string.isRequired,
};

Counter.propTypes = propTypes;
Counter.displayName = "HeaderLayout.Counter";
