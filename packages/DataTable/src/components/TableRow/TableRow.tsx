/* eslint-disable react/require-default-props */
import React from "react";
import { useReactTableContext } from "../ReactTableContext";
import { useRenderRowContext } from "../RenderRowContext";
import { useThemeContext } from "../ThemeContext";
import * as sc from "./TableRow.styles";

interface TableRowProps {
  index: number;
  style?: React.CSSProperties;
}

export default function TableRow({ index, style }: TableRowProps): JSX.Element {
  const { rows, prepareRow, totalColumnsWidth } = useReactTableContext();
  const { borderType, hasZebraStripes } = useThemeContext();
  const renderRow = useRenderRowContext();
  const row = rows[index];
  let customizedRow;

  if (!row) {
    return <div />;
  }

  if (typeof renderRow === "function") {
    customizedRow = renderRow(row);
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
      {customizedRow
        ? (customizedRow as JSX.Element)
        : row.cells.map(cell => (
            <sc.TD borderType={borderType} data-pka-anchor="table.td" {...cell.getCellProps()}>
              {cell.render("Cell")}
            </sc.TD>
          ))}
    </sc.TR>
  );
}
