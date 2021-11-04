import React from "react";
import { useTable, useBlockLayout } from "react-table";
import { extractChildrenProps } from "@paprika/helpers";

import { InfiniteLoader, InfiniteLoaderImpl } from "./components/InfiniteLoader";
import { ReactTableContext } from "./components/ReactTableContext";
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

export default function Table({
  columns,
  data,
  children,
}: {
  columns: any[];
  data: TableDataItemType[];
  children: React.ReactNode;
}): JSX.Element {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  // const hasNextPage = true;
  // const itemCount = hasNextPage ? data.length + 1 : data.length;

  // // Only load 1 page of items at a time.
  // // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  // const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // // Every row is loaded except for our loading indicator row.
  // const isItemLoaded = index => !hasNextPage || index < items.length;

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

  const { loadMoreItems } = extractChildrenProps(children, InfiniteLoader) as any;

  return (
    <sc.Wrapper>
      <div {...tableInstance.getTableProps()} className="table sticky">
        <div style={{ position: "relative", flex: 1, zIndex: 0 }}>
          <ReactTableContext.Provider value={tableInstance}>
            <InfiniteLoaderImpl
              data={data}
              loadMoreItems={loadMoreItems}
              Row={TableRow}
              innerElementType={InnerElement}
            />
          </ReactTableContext.Provider>
        </div>
      </div>
    </sc.Wrapper>
  );
}
