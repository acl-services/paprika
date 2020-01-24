import React from "react";
import PropTypes from "prop-types";
import useDebounce from "@paprika/helpers/lib/hooks/useDebounce";
import usePrevious from "@paprika/helpers/lib/hooks/usePrevious";

import * as styled from "./Filter.styles";

const propTypes = {
  initialValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Input(props) {
  const { initialValue, onChange } = props;
  const [inputtedValue, setInputtedValue] = React.useState(initialValue);
  const debouncedValue = useDebounce(inputtedValue, 300);
  const prevValue = usePrevious(debouncedValue);

  React.useEffect(() => {
    if (prevValue === undefined || prevValue === debouncedValue) return;
    onChange(debouncedValue);
    // Just want to watch the value change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  React.useEffect(() => {
    setInputtedValue(initialValue);
  }, [initialValue]);

  function handleChange(e) {
    const newInputtedValue = e.target.value;
    setInputtedValue(newInputtedValue);
  }
  return <styled.Input onChange={handleChange} value={inputtedValue} />;
}

Input.propTypes = propTypes;
