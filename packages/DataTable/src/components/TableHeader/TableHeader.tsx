import React from "react";
import { useReactTableContext } from "../ReactTableContext";
import { useThemeContext } from "../ThemeContext";
import * as sc from "./TableHeader.styles";

export default function TableHeader(): JSX.Element {
  const { headerGroups, totalColumnsWidth } = useReactTableContext();
  const { borderType, isHeaderSticky } = useThemeContext();

  return (
    <sc.Header isHeaderSticky={isHeaderSticky}>
      <div style={{ width: totalColumnsWidth }}>
        {headerGroups.map(headerGroup => (
          <sc.TR {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <sc.TH borderType={borderType} {...column.getHeaderProps()}>
                {column.render("Header")}
              </sc.TH>
            ))}
          </sc.TR>
        ))}
      </div>
    </sc.Header>
  );
}
