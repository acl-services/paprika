import React from "react";
import PropTypes from "prop-types";
import CheckBox from "@paprika/checkbox";
import * as styled from "./RowIndicator.styles";

const propTypes = {
  hasIndexIndicator: PropTypes.bool,
  hasNumber: PropTypes.bool,
  isActiveCell: PropTypes.bool,
  isActiveRow: PropTypes.bool,
  isChecked: PropTypes.func,
  onCheck: PropTypes.func,
  row: PropTypes.shape({}),
  rowIndex: PropTypes.number,
};

const defaultProps = {
  hasIndexIndicator: true,
  hasNumber: false,
  isActiveCell: false,
  isActiveRow: false,
  row: null,
  rowIndex: null,
  onCheck: () => {},
  isChecked: () => {
    return "unchecked";
  },
};

function isValueNotUnchecked(value) {
  return value !== "unchecked";
}

export default function RowIndicator(props) {
  const [isActive, setIsActive] = React.useState(false);
  const { rowIndex, isChecked, hasIndexIndicator, onCheck, isActiveCell, isActiveRow, hasNumber } = props;

  function handleCheck() {
    onCheck({ rowIndex });
  }

  function handleMouseOver() {
    setIsActive(() => true);
  }

  function handleMouseLeave() {
    setIsActive(() => false);
  }

  const indicator = hasNumber ? (
    <styled.RowIndexText hasFourDigitsOrMore={rowIndex > 999}>{rowIndex}</styled.RowIndexText>
  ) : (
    <styled.RowIndexText>
      <styled.Void />
    </styled.RowIndexText>
  );

  return (
    <styled.RowContainer
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      {isActive || isActiveCell || isActiveRow || isValueNotUnchecked(isChecked({ rowIndex })) || !hasIndexIndicator ? (
        <styled.Checkbox>
          <CheckBox
            tabIndex="-1"
            size="small"
            checkedState={isChecked({ rowIndex })}
            onClick={handleCheck}
            onChange={() => {}}
          />
        </styled.Checkbox>
      ) : (
        indicator
      )}
    </styled.RowContainer>
  );
}

RowIndicator.propTypes = propTypes;
RowIndicator.defaultProps = defaultProps;
