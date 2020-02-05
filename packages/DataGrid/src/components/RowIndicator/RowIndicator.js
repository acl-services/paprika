import React from "react";
import PropTypes from "prop-types";
import CheckBox from "@paprika/checkbox";
import * as styled from "./RowIndicator.styles";

const propTypes = {
  hasIndexIndicator: PropTypes.bool,
  isChecked: PropTypes.func,
  row: PropTypes.shape({}),
  rowIndex: PropTypes.number,
  isActiveCell: PropTypes.bool,
  isActiveRow: PropTypes.bool,
};

const defaultProps = {
  hasIndexIndicator: true,
  row: null,
  rowIndex: null,
  isChecked: () => {
    return "unchecked";
  },
  isActiveCell: false,
  isActiveRow: false,
};

function isValueNotUnchecked(value) {
  return value !== "unchecked";
}

export default function RowIndicator(props) {
  const [isActive, setIsActive] = React.useState(false);
  const { rowIndex, isChecked, hasIndexIndicator, isActiveCell, isActiveRow } = props;

  function handleMouseOver() {
    setIsActive(() => true);
  }

  function handleMouseLeave() {
    setIsActive(() => false);
  }

  return (
    <styled.RowContainer
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      {isActive || isActiveCell || isActiveRow || isValueNotUnchecked(isChecked()) || !hasIndexIndicator ? (
        <styled.Checkbox>
          <CheckBox tabIndex="-1" size="small" checkedState={isChecked()} onChange={() => {}} />
        </styled.Checkbox>
      ) : (
        <styled.RowIndexText hasFourDigitsOrMore={rowIndex > 999}>{rowIndex}</styled.RowIndexText>
      )}
    </styled.RowContainer>
  );
}

RowIndicator.propTypes = propTypes;
RowIndicator.defaultProps = defaultProps;
