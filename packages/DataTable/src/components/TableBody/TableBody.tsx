import React from "react";
import { useReactTableContext } from "../ReactTableContext";
import * as sc from "./TableBody.styles";

export default function TableBody({ children, ...otherProps }: { children: React.ReactNode }): JSX.Element {
  const { getTableBodyProps } = useReactTableContext();

  return (
    <sc.TBODY data-pka-anchor="dataTable.tbody" {...getTableBodyProps()} {...otherProps}>
      {children}
    </sc.TBODY>
  );
}
