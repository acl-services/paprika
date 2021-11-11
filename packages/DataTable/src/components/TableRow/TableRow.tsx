import React from "react";
import { ListChildComponentProps } from "react-window";
import { useReactTableContext } from "../ReactTableContext";
import { useThemeContext } from "../ThemeContext";
import * as sc from "./TableRow.styles";

// TODO: decouple TableRow from ListChildComponentProps
export default function TableRow({ index, style }: ListChildComponentProps): JSX.Element {
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
      hasBackgroundColor={hasZebraStripes && !!(index % 2)}
      {...restRow}
      style={{ ...rowStyle, width: totalColumnsWidth }}
    >
      {row.cells.map(cell => {
        return (
          <sc.TD borderType={borderType} {...cell.getCellProps()}>
            {cell.render("Cell")}
          </sc.TD>
        );
      })}
    </sc.TR>
  );
}
