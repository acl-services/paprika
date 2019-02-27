import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox/Checkbox";

const propTypes = {
  renderChecker: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default function Checkers(props) {
  const { isChecked } = props;
  if (typeof props.renderChecker === "function") {
    return props.renderChecker(isChecked);
  }

  if (typeof props.renderChecker === "string" && props.renderChecker === "checkbox") {
    return props.renderChecker === "checkbox" ? <Checkbox isChecked={isChecked} /> : null;
  }

  return null;
}

Checkers.propTypes = propTypes;
