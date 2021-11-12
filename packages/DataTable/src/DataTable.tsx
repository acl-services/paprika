/* eslint-disable react/require-default-props */
import React from "react";
import { useTable, useBlockLayout, Column } from "react-table";
import { extractChildrenProps } from "@paprika/helpers";
import { gridTypes } from "@paprika/constants";

import { InfiniteLoader, InfiniteLoaderImpl, InfiniteLoaderPublicProps } from "./components/InfiniteLoader";
import { ReactTableContext } from "./components/ReactTableContext";
import { ThemeContext } from "./components/ThemeContext";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { TableRow } from "./components/TableRow";

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
  [x: string]: any;
}

function Table(props: TableProps): JSX.Element {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  // const hasNextPage = true;
  // const itemCount = hasNextPage ? data.length + 1 : data.length;

  // // Only load 1 page of items at a time.
  // // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  // const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // // Every row is loaded except for our loading indicator row.
  // const isItemLoaded = index => !hasNextPage || index < items.length;

  const {
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
    ...moreProps
  } = props;

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
    },
    useBlockLayout
  );

  const infiniteLoaderPublicProps = extractChildrenProps(children, InfiniteLoader) as InfiniteLoaderPublicProps;

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
          <ReactTableContext.Provider value={{ ...tableInstance }}>
            <InfiniteLoaderImpl
              data={data}
              Row={TableRow}
              height={height}
              innerElementType={InnerElement}
              getRowHeight={getRowHeight}
              {...infiniteLoaderPublicProps}
            />
          </ReactTableContext.Provider>
        </div>
      </sc.Table>
    </ThemeContext.Provider>
  );
}

Table.displayName = "Table";

export default Table;
