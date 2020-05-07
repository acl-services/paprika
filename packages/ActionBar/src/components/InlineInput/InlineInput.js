import React from "react";
import PropTypes from "prop-types";
import * as sc from "./InlineInput.styles";

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InlineInput(props) {
  const { value, onChange } = props;

  function handleChange(e) {
    const newInputtedValue = e.target.value;
    onChange(newInputtedValue);
  }

  return (
    <sc.Wrapper data-pka-anchor="filter.inline-input">
      <sc.Input onChange={handleChange} value={value} />
      <sc.Trigger>{value}</sc.Trigger>
    </sc.Wrapper>
  );
}

InlineInput.propTypes = propTypes;
