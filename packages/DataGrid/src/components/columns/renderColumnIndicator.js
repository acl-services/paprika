import React from "react";
import RowIndicator from "../RowIndicator";
import ColumnDefinition from "../ColumnDefinition";

export default function renderColumnIndicator(props = {}) {
  const { isChecked = () => "unchecked", onSelect = () => {} } = props; // eslint-disable-line

  return (
    <ColumnDefinition
      headerA11yText={() => "unchecked"}
      cellA11yText={() => "unchecked"}
      header={propsHeader => <RowIndicator hasIndexIndicator={false} isChecked={isChecked} {...propsHeader} />}
      cell={propsCell => <RowIndicator isChecked={isChecked} onSelect={onSelect} {...propsCell} />}
      isSticky
      {...props}
      width={34}
    />
  );
}
