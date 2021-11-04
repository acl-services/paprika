import React from "react";
import { ListChildComponentProps } from "react-window";
import { useReactTableContext } from "../ReactTableContext";

// TODO: decouple TableRow from ListChildComponentProps
export default function TableRow({ index, style }: ListChildComponentProps): JSX.Element {
  const { rows, prepareRow, totalColumnsWidth } = useReactTableContext();
  const row = rows[index];

  if (!row) {
    return <div>Loading...</div>;
  }

  prepareRow(row);

  const { style: rowStyle, ...restRow } = row.getRowProps({ style });

  return (
    <div {...restRow} style={{ ...rowStyle, width: totalColumnsWidth }} className="tr">
      {row.cells.map((cell: any) => {
        return (
          <div {...cell.getCellProps()} className="td">
            {cell.render("Cell")}
          </div>
        );
      })}
    </div>
  );
}
