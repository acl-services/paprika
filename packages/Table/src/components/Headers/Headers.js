/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from "react";
import * as sc from "./Headers.styles";

// internal component doesn't get expose to our consumer
export function Headers(props) {
  const { extractedHeaders, ColumnDefinitions, borderType } = props;

  const hasAtLeastOneHeader = React.useMemo(
    () =>
      ColumnDefinitions.some(columnDefinition => {
        const { header } = columnDefinition.props;
        return typeof header !== "undefined" && (typeof header === "function" || typeof header === "string");
      }),
    [ColumnDefinitions]
  );

  if (hasAtLeastOneHeader) {
    return (
      <sc.Thead>
        {extractedHeaders || null}
        <tr>
          {ColumnDefinitions.map((columnDefinition, columnIndex) => {
            const { cell, header, sticky, ...moreColumnProps } = columnDefinition.props;

            if (typeof header === "undefined") return null;

            if (typeof header === "function")
              return (
                <sc.TH sticky={sticky} scope="col" borderType={borderType} key={columnIndex} {...moreColumnProps}>
                  {header({ header: columnDefinition.props, columnIndex })}
                </sc.TH>
              );

            if (typeof header === "string")
              return (
                <sc.TH sticky={sticky} scope="col" borderType={borderType} key={columnIndex} {...moreColumnProps}>
                  {header}
                </sc.TH>
              );

            throw new Error("Header should be either of type string or function");
          })}
        </tr>
      </sc.Thead>
    );
  }

  if (extractedHeaders) return <sc.Thead>{extractedHeaders}</sc.Thead>;

  return null;
}

export default function HeadersShells(props) {
  const { children } = props;
  return children;
}

HeadersShells.displayName = "Table.Headers";
