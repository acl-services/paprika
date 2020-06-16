import React from "react";
import RowIndicator from "../RowIndicator";
import ColumnDefinition from "../ColumnDefinition";

export default function renderColumnIndicator(options = {}) {
  const {
    isAllChecked = false,
    onCheck = () => {},
    onCheckAll = () => {},
    hasNumber = true,
    hasHeaderChecker = true,
    checkedItems = () => {
      return [];
    },
    ...moreOptions
  } = options;

  return (
    <ColumnDefinition
      headerA11yText={() => "unchecked"}
      cellA11yText={() => "unchecked"}
      header={propsHeader => {
        return hasHeaderChecker ? (
          <RowIndicator
            hasIndexIndicator={false}
            onCheck={onCheckAll}
            isChecked={isAllChecked}
            checkedItems={checkedItems}
            {...propsHeader}
          />
        ) : null;
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
