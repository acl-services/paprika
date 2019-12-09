import React from "react";
import PropTypes from "prop-types";
import useDebounce from "@paprika/helpers/lib/hooks/useDebounce";
import PaprikaInput from "@paprika/input";

const propTypes = {
  initialValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Input(props) {
  const { initialValue, onChange } = props;
  const [inputtedValue, setInputtedValue] = React.useState(initialValue);
  const debouncedValue = useDebounce(inputtedValue, 300);

  React.useEffect(() => {
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
  return <PaprikaInput onChange={handleChange} value={inputtedValue} />;
}

Input.propTypes = propTypes;
