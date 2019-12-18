import React from "react";
import PropTypes from "prop-types";
import CheckBox from "@paprika/checkbox";
import * as styles from "./RowIndicator.styles";

const propTypes = {
  hasIndexIndicator: PropTypes.bool,
  isSelected: PropTypes.func,
  onSelected: PropTypes.func,
};
const defaultProps = {
  hasIndexIndicator: true,
  isSelected: () => {},
  onSelected: () => {},
};

export default function RowIndicator(props) {
  const [isActive, setIsActive] = React.useState(false);

  // this improves uxdev instead of forcing them to pass down each prop individually
  // the can just do {...args} which will be destructure the arguments array into the props
  const {
    "0": row = null, // eslint-disable-line
    "1": rowIndex = null, // eslint-disable-line
    "2": refPageActiveIndex, // eslint-disable-line
    isSelected,
    onSelected,
    hasIndexIndicator,
  } = props;

  const { start, end } = refPageActiveIndex.current;

  function handleMouseOver() {
    setIsActive(() => true);
  }

  function handleMouseLeave() {
    setIsActive(() => false);
  }

  const handleSelected = (row, rowIndex) => () => {
    onSelected(row, rowIndex, { start, end });
  };

  const isChecked = isSelected(row, rowIndex, { start, end });
  return (
    <div
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      {isActive || (isChecked === "checked" || isChecked === "indeterminate") || !hasIndexIndicator ? (
        <CheckBox onClick={handleSelected(row, rowIndex)} checkedState={isChecked} onChange={() => {}} />
      ) : (
        <styles.RowIndexText>{rowIndex}</styles.RowIndexText>
      )}
    </div>
  );
}

RowIndicator.propTypes = propTypes;
RowIndicator.defaultProps = defaultProps;
