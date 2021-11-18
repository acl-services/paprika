/* eslint-disable react/require-default-props */
import React from "react";
import { useReactTableContext } from "../ReactTableContext";
import { useThemeContext } from "../ThemeContext";
import * as sc from "./TableRow.styles";

interface TableRowProps {
  index: number;
  style?: React.CSSProperties;
}

export default function TableRow({ index, style }: TableRowProps): JSX.Element {
  const { rows, prepareRow, totalColumnsWidth } = useReactTableContext();
  const { borderType, hasZebraStripes } = useThemeContext();
  const row = rows[index];

  if (!row) {
    return <div>Loading...</div>;
  }

  prepareRow(row);

  const { style: rowStyle, ...restRow } = row.getRowProps({ style });

  return (
    <sc.TR
      data-pka-anchor="table.tr"
      hasBackgroundColor={hasZebraStripes && !!(index % 2)}
      {...restRow}
      style={{ ...rowStyle, width: totalColumnsWidth }}
    >
      {row.cells.map(cell => {
        return (
          <sc.TD borderType={borderType} data-pka-anchor="table.td" {...cell.getCellProps()}>
            {cell.render("Cell")}
          </sc.TD>
        );
      })}
    </sc.TR>
  );
}
