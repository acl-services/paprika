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
import useTableDimensions from "./hooks/useTableDimensions";

import { TableDataItemType, BorderType } from "./types";

import * as sc from "./DataTable.styles";

export const ResizeContainer: React.FC<Record<string, any>> = (...moreProps) => <></>;
ResizeContainer.displayName = "DataTable.ResizeContainer";

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
  ResizeContainer: React.FC<Record<string, any>>;
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

  /** The height of the table in px */
  height?: number;

  /** The width of the table */
  width?: string | number;

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

  /** Experimental prop */
  extraCellProps?: Record<string, any>;

  [x: string]: any;
}

const DataTable: React.FC<DataTableProps> & DataTableComposition = ({
  a11yText,
  children = null,
  columns,
  data,
  height,
  width,
  borderType = gridTypes.HORIZONTAL,
  getRowHeight = null,
  hasZebraStripes = false,
  isHeaderSticky = true,
  renderRow = null,
  extraCellProps = {},
  ...moreProps
}: DataTableProps) => {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const { getTableHeight, getTableWidth } = useTableDimensions(tableRef, data.length, height, width);

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

  function renderTable(height: number, width: number | string) {
    return (
      <sc.Table
        ref={tableRef}
        aria-label={a11yText}
        aria-rowcount={data.length}
        data-pka-anchor="dataTable"
        width={width}
        height={height}
        {...tableInstance.getTableProps()}
        {...moreProps}
      >
        <sc.ContentWrapper>
          <RenderRowContext.Provider value={renderRow}>
            <ReactTableContext.Provider value={tableInstance}>{renderTableContent(height)}</ReactTableContext.Provider>
          </RenderRowContext.Provider>
        </sc.ContentWrapper>
      </sc.Table>
    );
  }

  if (!extractedResizeContainer) {
    if (width === undefined) {
      console.warn("The `width` prop should be specified if `<DataTable.ResizeContainer>` is not used");
    }

    if (height === undefined) {
      console.warn("The `height` prop should be specified if `<DataTable.ResizeContainer>` is not used");
    }
  }

  return (
    <ThemeContext.Provider value={{ borderType, isHeaderSticky, hasZebraStripes }}>
      {extractedResizeContainer ? (
        <div {...extractedResizeContainer.props}>
          <ResizeDetector isFullHeight>
            {({ height: maxHeight, width: maxWidth }) =>
              renderTable(getTableHeight(maxHeight), getTableWidth(maxWidth))
            }
          </ResizeDetector>
        </div>
      ) : (
        renderTable(height || 0, width || 0)
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
