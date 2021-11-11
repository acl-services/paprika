import React from "react";
import { useReactTableContext } from "../ReactTableContext";
import * as sc from "./TableBody.styles";

export default function TableBody({ children, ...otherProps }: { children: React.ReactNode }): JSX.Element {
  const { getTableBodyProps } = useReactTableContext();

  return (
    <sc.Body {...getTableBodyProps()} {...otherProps}>
      {children}
    </sc.Body>
  );
}
