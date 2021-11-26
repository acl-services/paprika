import React from "react";
import { useReactTableContext } from "../ReactTableContext";
import { useThemeContext } from "../ThemeContext";
import * as sc from "./TableHeader.styles";

export default function TableHeader(): JSX.Element {
  const { headerGroups, totalColumnsWidth } = useReactTableContext();
  const { borderType, isHeaderSticky } = useThemeContext();

  return (
    <sc.THEAD
      data-pka-anchor="dataTable.thead"
      isHeaderSticky={isHeaderSticky}
      role="rowgroup"
      totalColumnsWidth={totalColumnsWidth}
    >
      {headerGroups.map(headerGroup => (
        <sc.TR data-pka-anchor="dataTable.tr" {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <sc.TH borderType={borderType} data-pka-anchor="dataTable.th" {...column.getHeaderProps()}>
              {column.render("Header")}
            </sc.TH>
          ))}
        </sc.TR>
      ))}
    </sc.THEAD>
  );
}
