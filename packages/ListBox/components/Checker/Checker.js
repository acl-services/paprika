import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox/Checkbox";

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
  isOptionActionGroup: PropTypes.bool,
  renderChecker: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const defaultProps = {
  isOptionActionGroup: false,
  renderChecker: null,
};

export default function Checkers(props) {
  const { isOptionActionGroup, isChecked } = props;
  if (isOptionActionGroup) {
    if (typeof props.renderChecker === "function") {
      return props.renderChecker(isChecked);
    }

    return <Checkbox isChecked={isChecked} />;
  }

  if (typeof props.renderChecker === "function") {
    return props.renderChecker(isChecked);
  }

  if (typeof props.renderChecker === "string" && props.renderChecker === "checkbox") {
    return props.renderChecker === "checkbox" ? <Checkbox isChecked={isChecked} /> : null;
  }

  return null;
}

Checkers.propTypes = propTypes;
Checkers.defaultProps = defaultProps;
