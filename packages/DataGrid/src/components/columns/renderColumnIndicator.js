import React from "react";
import RowIndicator from "../RowIndicator";
import ColumnDefinition from "../ColumnDefinition";

export default function renderColumnIndicator(options = {}) {
  const { isChecked = () => "unchecked", onSelect = {} } = options;

  function handleOnSelect(args) {
    onSelect(args);
  }

  return (
    <ColumnDefinition
      headerA11yText={() => "unchecked"}
      cellA11yText={() => "unchecked"}
      header={propsHeader => <RowIndicator hasIndexIndicator={false} isChecked={isChecked} {...propsHeader} />}
      cell={propsCell => <RowIndicator isChecked={isChecked} onSelect={handleOnSelect} {...propsCell} />}
      isSticky
      {...options}
      onSpaceBar={handleOnSelect}
      onEnter={handleOnSelect}
      onClick={handleOnSelect}
      width={34}
    />
  );
}
