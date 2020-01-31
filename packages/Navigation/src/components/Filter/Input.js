import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import * as styled from "./Filter.styles";

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Input(props) {
  const { value, onChange } = props;

  const delayedOnChange = React.useCallback(debounce(onChange, 300), [onChange]);

  function handleChange(e) {
    const newInputtedValue = e.target.value;
    delayedOnChange(newInputtedValue);
  }
  return <styled.Input onChange={handleChange} defaultValue={value} />;
}

Input.propTypes = propTypes;
