import React from "react";
import RowIndicator from "../RowIndicator";
import ColumnDefinition from "../ColumnDefinition";

export default function renderColumnIndicator(options = {}) {
  const {
    isAllChecked = false,
    onCheck = () => {},
    hasNumber = true,
    hasHeaderChecker = true,
    checkedItems = [],
    ...moreOptions
  } = options;

  return (
    <ColumnDefinition
      key="renderColumnIndicator"
      headerA11yText={() => "unchecked"}
      cellA11yText={() => "unchecked"}
      header={() => {
        return hasHeaderChecker ? <RowIndicator onCheck={onCheck} isChecked={isAllChecked} isHeaderChecker /> : null;
      }}
      cell={propsCell => (
        <RowIndicator
          hasNumber={hasNumber}
          isChecked={checkedItems.includes(propsCell.rowIndex)}
          onCheck={onCheck}
          {...propsCell}
        />
      )}
      isSticky
      {...moreOptions}
      onPressSpaceBar={onCheck}
      onPressEnter={onCheck}
      onClick={onCheck}
      width={34}
      cellProps={() => ({
        isRowIndicator: true,
        style: {
          padding: 0,
        },
      })}
    />
  );
}
