/* eslint-disable react/require-default-props */
import React from "react";
import { useTable, useBlockLayout, Column, Row } from "react-table";
import { extractChildren } from "@paprika/helpers";
import { gridTypes } from "@paprika/constants";

import { InfiniteLoader, InfiniteLoaderImpl, InfiniteLoaderPublicProps } from "./components/InfiniteLoader";
import { ReactTableContext } from "./components/ReactTableContext";
import { ThemeContext } from "./components/ThemeContext";
import { RenderRowContext } from "./components/RenderRowContext";
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

type BorderType = gridTypes.GRID | gridTypes.NONE | gridTypes.HORIZONTAL | gridTypes.VERTICAL;

interface ConstantsTypes {
  borderType: BorderType;
}

interface DataTableComposition {
  InfiniteLoader: React.FC<InfiniteLoaderPublicProps>;
  types: ConstantsTypes;
}

export interface DataTableProps {
  /** Accessible description of the table */
  a11yText: string;

  children: React.ReactNode;

  /** Array of column definition */
  columns: Column<TableDataItemType>[];

  /** Array of data to be stored in the table */
  data: TableDataItemType[];

  /** The height of the table in px */
  height: number;

  /** Define the look for borders in the table */
  borderType?: BorderType;

  /** Function to return the row height for each row */
  getRowHeight?: ((index: number) => number) | null;

  /** Add an alternating background on the table rows */
  hasZebraStripes?: boolean;

  /** If the entire table header is sticky or not */
  isHeaderSticky?: boolean;

  /** Override the table Column configuration for some particular rows */
  renderRow?: ((row: Row<TableDataItemType>) => unknown) | null;

  /** The width of the table */
  width?: string | number;

  /** Experimental prop */
  extraCellProps?: Record<string, unknown>;

  [x: string]: unknown;
}

const DataTable: React.FC<DataTableProps> & DataTableComposition = ({
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
}: DataTableProps) => {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
        height={height}
        {...tableInstance.getTableProps()}
        {...moreProps}
      >
        <sc.ContentWrapper>
          <RenderRowContext.Provider value={renderRow}>
            <ReactTableContext.Provider value={tableInstance}>{renderTableContent()}</ReactTableContext.Provider>
          </RenderRowContext.Provider>
        </sc.ContentWrapper>
      </sc.Table>
    </ThemeContext.Provider>
  );
};

DataTable.displayName = "DataTable";
DataTable.InfiniteLoader = InfiniteLoader;
DataTable.types = {
  borderType: gridTypes,
};

export default DataTable;
