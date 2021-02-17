import React from "react";
import PropTypes from "prop-types";
import Input from "@paprika/input";
import * as sc from "./Text.styles";

const propTypes = {
  value: PropTypes.string.isRequired,
  columnWidth: PropTypes.number,
  status: PropTypes.string.isRequired,
  statusTypes: PropTypes.shape({}),
  close: PropTypes.func.isRequired,
};

const defaultProps = {
  columnWidth: null,
  statusTypes: {},
};

export default function Text(props) {
  const { value: valueProps, columnWidth, status, statusTypes: on, close } = props;
  const [value, setValue] = React.useState(valueProps);
  const [original, setOriginal] = React.useState(valueProps);

  const refInput = React.useRef(null);

  const handleChange = React.useCallback(event => {
    console.log(event.target.value);
    setValue(event.target.value);
  }, []);

  // requires useCallback to maintain Referential equality
  const handleKeyUp = React.useCallback(
    event => {
      if (event.key === "Escape") {
        close();
        setValue(original);
      }

      if (event.key === "Enter") {
        setValue(event.target.value);
        close();
      }
    },
    [close]
  );

  function handleKeyDown(event) {
    if (["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"].includes(event.key)) {
      event.stopPropagation();
    }
  }

  React.useEffect(() => {
    if (status === on.EDITING) {
      setOriginal(value);
      refInput.current.focus();
    }
    // in this specific case we don't want to
    // recalculate again setOriginal when value change
  }, [status, on]); // eslint-disable-line

  React.useEffect(() => {
    if (valueProps !== value) {
      console.log("rerender");
      setValue(valueProps);
    }
    // we only want to track valueProps
  }, [valueProps]); // eslint-disable-line

  if (status === on.EDITING) {
    return (
      <Input ref={refInput} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} onChange={handleChange} value={value} />
    );
  }

  console.log(">>>>>>>>>>>>>", value);

  return (
    <sc.Text maxColumnWidth={columnWidth}>
      <sc.Ellipsis>{value}</sc.Ellipsis>
    </sc.Text>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
