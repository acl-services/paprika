import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import * as styled from "./Filter.styles";

const propTypes = {
  inputKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Input(props) {
  const { inputKey, value, onChange } = props;

  const delayedOnChange = React.useCallback(debounce(onChange, 300), [onChange]);

  function handleChange(e) {
    const newInputtedValue = e.target.value;
    delayedOnChange(newInputtedValue);
  }
  return <styled.Input key={inputKey} onChange={handleChange} defaultValue={value} />;
}

Input.propTypes = propTypes;
