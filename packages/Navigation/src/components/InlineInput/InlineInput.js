import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import * as styled from "./InlineInput.styles";

const propTypes = {
  inputKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InlineInput(props) {
  const { inputKey, value, onChange } = props;
  const [inputtedString, setInputtedString] = React.useState(value);
  const delayedOnChange = React.useCallback(debounce(onChange, 300), [onChange]);

  function handleChange(e) {
    const newInputtedValue = e.target.value;
    setInputtedString(newInputtedValue);
    delayedOnChange(newInputtedValue);
  }

  return (
    <styled.Wrapper data-pka-anchor="filter.filter-item">
      <styled.Input key={inputKey} onChange={handleChange} value={inputtedString} />
      <styled.Trigger>{inputtedString}</styled.Trigger>
    </styled.Wrapper>
  );
}

InlineInput.propTypes = propTypes;
