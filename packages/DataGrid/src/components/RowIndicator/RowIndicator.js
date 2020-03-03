import React from "react";
import PropTypes from "prop-types";
import CheckBox from "@paprika/checkbox";
import * as sc from "./RowIndicator.styles";

const _UNCHECKED_ = "unchecked";

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
    return _UNCHECKED_;
  },
};

function isValueNotUnchecked(value) {
  return value !== _UNCHECKED_;
}

export default function RowIndicator(props) {
  const [isActive, setIsActive] = React.useState(false);
  const { rowIndex, isChecked, hasIndexIndicator, onCheck, isActiveCell, isActiveRow, hasNumber } = props;

  function handleCheck() {
    onCheck({ rowIndex });
  }

  function handleMouseOver() {
    setIsActive(true);
  }

  function handleMouseLeave() {
    setIsActive(false);
  }

  const indicator = hasNumber ? (
    <sc.RowIndexText hasFourDigitsOrMore={rowIndex > 999}>{rowIndex}</sc.RowIndexText>
  ) : (
    <sc.RowIndexText>
      <sc.Void />
    </sc.RowIndexText>
  );

  return (
    <sc.RowContainer
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      onMouseLeave={handleMouseLeave}
    >
      {isActive || isActiveCell || isActiveRow || isValueNotUnchecked(isChecked({ rowIndex })) || !hasIndexIndicator ? (
        <sc.Checkbox>
          <CheckBox tabIndex="-1" size="small" checkedState={isChecked({ rowIndex })} onChange={handleCheck} />
        </sc.Checkbox>
      ) : (
        indicator
      )}
    </sc.RowContainer>
  );
}

RowIndicator.propTypes = propTypes;
RowIndicator.defaultProps = defaultProps;
