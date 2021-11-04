import React from "react";
import { useReactTableContext } from "../ReactTableContext";

export default function TableHeader(): JSX.Element {
  const { headerGroups, totalColumnsWidth } = useReactTableContext();

  return (
    <div className="header">
      <div style={{ width: totalColumnsWidth }}>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className="th">
                {column.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
