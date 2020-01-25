import React from "react";
import PropTypes from "prop-types";
import CheckBox from "@paprika/checkbox";
import * as styles from "./RowIndicator.styles";

const propTypes = {
  columnIndex: PropTypes.number,
  hasIndexIndicator: PropTypes.bool,
  isChecked: PropTypes.func,
  onSelect: PropTypes.func,
  row: PropTypes.shape({}),
  rowIndex: PropTypes.number,
};
const defaultProps = {
  columnIndex: null,
  hasIndexIndicator: true,
  row: null,
  rowIndex: null,
  onSelect: () => {},
  isChecked: () => {
    return "unchecked";
  },
};

function isValueNotUnchecked(value) {
  return value !== "unchecked";
}

export default function RowIndicator(props) {
  const [isActive, setIsActive] = React.useState(false);
  const { row, rowIndex, isChecked, columnIndex, hasIndexIndicator, onSelect } = props;

  function handleMouseOver() {
    setIsActive(() => true);
  }

  function handleMouseLeave() {
    setIsActive(() => false);
  }

  const handleClick = (row, rowIndex, columnIndex) => () => {
    onSelect(row, rowIndex, columnIndex);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      {isActive || isValueNotUnchecked(isChecked()) || !hasIndexIndicator ? (
        <CheckBox onClick={handleClick(row, rowIndex, columnIndex)} checkedState={isChecked()} onChange={() => {}} />
      ) : (
        <styles.RowIndexText>{rowIndex}</styles.RowIndexText>
      )}
    </div>
  );
}

RowIndicator.propTypes = propTypes;
RowIndicator.defaultProps = defaultProps;
