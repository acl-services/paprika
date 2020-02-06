import React from "react";
import RowIndicator from "../RowIndicator";
import ColumnDefinition from "../ColumnDefinition";

export default function renderColumnIndicator(options = {}) {
  const {
    isChecked = () => "unchecked",
    isAllChecked = "unchecked",
    onCheck = () => {},
    onCheckAll = () => {},
    hasNumber = true,
    hasHeaderChecker = true,
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
            isChecked={() => isAllChecked}
            {...propsHeader}
          />
        ) : null;
      }}
      cell={propsCell => <RowIndicator hasNumber={hasNumber} isChecked={isChecked} onCheck={onCheck} {...propsCell} />}
      isSticky
      {...moreOptions}
      onSpaceBar={onCheck}
      onEnter={onCheck}
      onClick={onCheck}
      width={34}
      cellProps={() => ({
        style: {
          padding: 0,
        },
      })}
    />
  );
}
