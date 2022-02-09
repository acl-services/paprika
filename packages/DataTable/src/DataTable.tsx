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
import useBestTableDimensions from "./hooks/useBestTableDimensions";
import { TableDataItemType, BorderType } from "./types";

import * as sc from "./DataTable.styles";

function InnerElement({ children, ...rest }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <TableHeader />
      <TableBody {...rest}>{children}</TableBody>
    </>
  );
}

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

  children?: React.ReactNode;

  /** Array of column definition */
  columns: Column<TableDataItemType>[];

  /** Array of data to be stored in the table */
  data: TableDataItemType[];

  /** The max height of the table in px/vh/calc(xvh+/-xpx) */
  maxHeight?: string;

  /** The max width of the table in px/vw/calc(xvw+/-xpx) */
  maxWidth?: string;

  /** Define the look for borders in the table */
  borderType?: BorderType;

  /** Function to return the row height for each row */
  getRowHeight?: ((index: number) => number) | null;

  /** Add an alternating background on the table rows */
  hasZebraStripes?: boolean;

  /** If the entire table header is sticky or not */
  isHeaderSticky?: boolean;

  /** Override the table Column configuration for some particular rows */
  renderRow?: ((row: Row<TableDataItemType>) => React.ReactNode) | null;

  /** If the table should be resized when the viewport size changed */
  shouldResizeWithViewport?: boolean;

  /** Experimental prop */
  extraCellProps?: Record<string, any>;

  [x: string]: any;
}

function DataTable(
  {
    a11yText,
    children = null,
    columns,
    data,
    maxHeight = "100vh",
    maxWidth = "100vw",
    borderType = gridTypes.HORIZONTAL,
    getRowHeight = null,
    hasZebraStripes = false,
    isHeaderSticky = true,
    renderRow = null,
    shouldResizeWithViewport = true,
    extraCellProps = {},
    ...moreProps
  }: DataTableProps,
  componentRef: React.RefObject<unknown>
) {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const bestDimensions = useBestTableDimensions({
    tableRef,
    componentRef,
    maxHeight,
    maxWidth,
    shouldResizeWithViewport,
  });

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

  /* eslint-disable @typescript-eslint/ban-ts-comment */
  const {
    // @ts-ignore
    "DataTable.InfiniteLoader": extractedInfiniteLoaderDefinition,
  } = extractChildren(children, ["DataTable.InfiniteLoader"]);
  /* eslint-enable @typescript-eslint/ban-ts-comment */

  function renderTableContent() {
    const hasInfiniteLoader = Boolean(extractedInfiniteLoaderDefinition);

    if (hasInfiniteLoader) {
      const infiniteLoaderPublicProps = extractedInfiniteLoaderDefinition.props as InfiniteLoaderPublicProps;

      return (
        <InfiniteLoaderImpl
          data={data}
          height={bestDimensions.height}
          innerElementType={InnerElement}
          getRowHeight={getRowHeight}
          shouldHaveHorizontalScroll={bestDimensions.shouldHaveHorizontalScroll}
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
        ref={tableRef}
        aria-label={a11yText}
        aria-rowcount={data.length}
        data-pka-anchor="dataTable"
        width={bestDimensions.width}
        height={bestDimensions.height}
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
}

declare module "react" {
  function forwardRef<T, P = unknown>(
    render: (props: P, ref: React.RefObject<T>) => React.ReactElement | null
  ): React.FC<DataTableProps> & DataTableComposition;
}

const DataTableWithRef = React.forwardRef(DataTable);

DataTableWithRef.displayName = "DataTable";
DataTableWithRef.InfiniteLoader = InfiniteLoader;
DataTableWithRef.types = {
  borderType: gridTypes,
};

export default DataTableWithRef;
