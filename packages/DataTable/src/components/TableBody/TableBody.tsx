import React from "react";
import { useReactTableContext } from "../ReactTableContext";

export default function TableBody({ children, ...otherProps }: { children: React.ReactNode }): JSX.Element {
  const { getTableBodyProps } = useReactTableContext();

  return (
    <div style={{ height: 500 - 58 - 57 }} className="body">
      <div {...getTableBodyProps()} {...otherProps}>
        {children}
      </div>
    </div>
  );
}
