import React from "react";
import PropTypes from "prop-types";
import * as styled from "./InlineInput.styles";

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
    <styled.Wrapper data-pka-anchor="filter.inline-input">
      <styled.Input onChange={handleChange} value={value} />
      <styled.Trigger>{value}</styled.Trigger>
    </styled.Wrapper>
  );
}

InlineInput.propTypes = propTypes;
