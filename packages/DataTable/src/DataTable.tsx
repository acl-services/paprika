/* eslint-disable react/require-default-props */
import React from "react";
import { useTable, useBlockLayout, Column } from "react-table";
import { extractChildren } from "@paprika/helpers";
import { gridTypes } from "@paprika/constants";

import { InfiniteLoaderImpl, InfiniteLoaderPublicProps } from "./components/InfiniteLoader";
import { ReactTableContext } from "./components/ReactTableContext";
import { ThemeContext } from "./components/ThemeContext";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { TableRow } from "./components/TableRow";
import useSticky from "./hooks/useSticky";

import { TableDataItemType } from "./types";

import * as sc from "./DataTable.styles";

function InnerElement({ children, ...rest }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <TableHeader />
      <TableBody {...rest}>{children}</TableBody>
    </>
  );
}

export interface TableProps {
  a11yText: string;
  children: React.ReactNode;
  columns: Column<TableDataItemType>[];
  data: TableDataItemType[];
  height: number;
  borderType?: string;
  getRowHeight?: ((index: number) => number) | null;
  hasZebraStripes?: boolean;
  isHeaderSticky?: boolean;
  renderRow?: (({ index, row }: { index: number; row: Record<string, unknown> }) => JSX.Element) | null;
  width?: string | number;
  extraCellProps?: Record<string, unknown>;
  [x: string]: unknown;
}

function Table({
  a11yText,
  children,
  columns,
  data,
  height,
  borderType = gridTypes.HORIZONTAL,
  getRowHeight = null,
  hasZebraStripes = false,
  isHeaderSticky = true,
  renderRow = null,
  width = "100%",
  extraCellProps = {},
  ...moreProps
}: TableProps): JSX.Element {
  const defaultColumn = React.useMemo(
    () => ({
      width: 150,
    }),
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      extraCellProps,
    },
    useBlockLayout,
    useSticky
  );

  function renderTableContent() {
    const { InfiniteLoader: extractedInfiniteLoaderDefinition } = extractChildren(children, ["InfiniteLoader"]);
    const hasInfiniteLoader = Boolean(extractedInfiniteLoaderDefinition);

    if (hasInfiniteLoader) {
      const infiniteLoaderPublicProps = extractedInfiniteLoaderDefinition.props as InfiniteLoaderPublicProps;

      return (
        <InfiniteLoaderImpl
          data={data}
          height={height}
          innerElementType={InnerElement}
          getRowHeight={getRowHeight}
          {...infiniteLoaderPublicProps}
        />
      );
    }

    return (
      <InnerElement>
        {tableInstance.rows.map((row, index) => {
          return <TableRow key={row.id} index={index} />;
        })}
      </InnerElement>
    );
  }

  return (
    <ThemeContext.Provider value={{ borderType, isHeaderSticky, hasZebraStripes }}>
      <sc.Table
        aria-label={a11yText}
        data-pka-anchor="table"
        width={width}
        {...tableInstance.getTableProps()}
        {...moreProps}
      >
        <div style={{ position: "relative", flex: 1 }}>
          <ReactTableContext.Provider value={tableInstance}>{renderTableContent()}</ReactTableContext.Provider>
        </div>
      </sc.Table>
    </ThemeContext.Provider>
  );
}

Table.displayName = "Table";

export default Table;
