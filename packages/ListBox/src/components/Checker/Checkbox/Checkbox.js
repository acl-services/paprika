import React from "react";
import PropTypes from "prop-types";
import CheckboxStyled from "./Checkbox.styles";

const propTypes = {
  isChecked: PropTypes.bool.isRequired,
};

export default function Checkbox(props) {
  return <CheckboxStyled type="checkbox" tabIndex={-1} checked={props.isChecked} onChange={() => {}} />;
}

Checkbox.propTypes = propTypes;
