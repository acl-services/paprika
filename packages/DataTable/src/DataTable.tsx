import React from "react";
import { useTable, useBlockLayout, Column, Row } from "react-table";
import ResizeDetector from "@paprika/resize-detector";
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
import useTableHeight from "./hooks/useTableHeight";

import { TableDataItemType } from "./types";

import * as sc from "./DataTable.styles";

export const ResizeContainer: React.FC<Record<string, any>> = (...moreProps) => {
  return <></>;
};

ResizeContainer.displayName = "DataTable.ResizeContainer";

function InnerElement({ children, ...rest }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <TableHeader />
      <TableBody {...rest}>{children}</TableBody>
    </>
  );
}

// Need to be fixed in constants package
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type BorderType = gridTypes.GRID | gridTypes.NONE | gridTypes.HORIZONTAL | gridTypes.VERTICAL;

interface ConstantsTypes {
  borderType: BorderType;
}

interface DataTableComposition {
  InfiniteLoader: React.FC<InfiniteLoaderPublicProps>;
  ResizeContainer: React.FC<Record<string, any>>;
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
  const tableRef = React.useRef<HTMLDivElement>(null);
  const { getTableHeight } = useTableHeight(tableRef, data.length);

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
    // @ts-ignore
    "DataTable.ResizeContainer": extractedResizeContainer,
  } = extractChildren(children, ["DataTable.InfiniteLoader", "DataTable.ResizeContainer"]);
  /* eslint-enable @typescript-eslint/ban-ts-comment */

  function renderTableContent(maxHeight: number) {
    const hasInfiniteLoader = Boolean(extractedInfiniteLoaderDefinition);

    if (hasInfiniteLoader) {
      const infiniteLoaderPublicProps = extractedInfiniteLoaderDefinition.props as InfiniteLoaderPublicProps;

      return (
        <InfiniteLoaderImpl
          data={data}
          height={maxHeight}
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

  function renderTable(maxHeight: number) {
    return (
      <sc.Table
        ref={tableRef}
        aria-label={a11yText}
        aria-rowcount={data.length}
        data-pka-anchor="dataTable"
        width={width}
        height={getTableHeight(maxHeight)}
        {...tableInstance.getTableProps()}
        {...moreProps}
      >
        <sc.ContentWrapper>
          <RenderRowContext.Provider value={renderRow}>
            <ReactTableContext.Provider value={tableInstance}>
              {renderTableContent(maxHeight)}
            </ReactTableContext.Provider>
          </RenderRowContext.Provider>
        </sc.ContentWrapper>
      </sc.Table>
    );
  }

  return (
    <ThemeContext.Provider value={{ borderType, isHeaderSticky, hasZebraStripes }}>
      {extractedResizeContainer ? (
        <div {...extractedResizeContainer.props}>
          <ResizeDetector isFullHeight>{({ height: maxHeight }) => renderTable(maxHeight)}</ResizeDetector>
        </div>
      ) : (
        renderTable(height)
      )}
    </ThemeContext.Provider>
  );
};

DataTable.displayName = "DataTable";
DataTable.InfiniteLoader = InfiniteLoader;
DataTable.ResizeContainer = ResizeContainer;
DataTable.types = {
  borderType: gridTypes,
};

export default DataTable;
