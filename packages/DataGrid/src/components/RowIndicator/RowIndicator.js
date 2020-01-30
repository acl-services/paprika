import React from "react";
import PropTypes from "prop-types";
import CheckBox from "@paprika/checkbox";
import * as styles from "./RowIndicator.styles";

const propTypes = {
  hasIndexIndicator: PropTypes.bool,
  isChecked: PropTypes.func,
  row: PropTypes.shape({}),
  rowIndex: PropTypes.number,
  isActiveCell: PropTypes.bool,
};

const defaultProps = {
  hasIndexIndicator: true,
  row: null,
  rowIndex: null,
  isChecked: () => {
    return "unchecked";
  },
  isActiveCell: false,
};

function isValueNotUnchecked(value) {
  return value !== "unchecked";
}

export default function RowIndicator(props) {
  const [isActive, setIsActive] = React.useState(false);
  const { rowIndex, isChecked, hasIndexIndicator, isActiveCell } = props;

  function handleMouseOver() {
    setIsActive(() => true);
  }

  function handleMouseLeave() {
    setIsActive(() => false);
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      {isActive || isActiveCell || isValueNotUnchecked(isChecked()) || !hasIndexIndicator ? (
        <CheckBox tabIndex="-1" size="small" checkedState={isChecked()} onChange={() => {}} />
      ) : (
        <styles.RowIndexText>{rowIndex}</styles.RowIndexText>
      )}
    </div>
  );
}

RowIndicator.propTypes = propTypes;
RowIndicator.defaultProps = defaultProps;
