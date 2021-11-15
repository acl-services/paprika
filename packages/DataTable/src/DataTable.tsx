import React from "react";
import { useTable, useBlockLayout, Column as ReactTableColumn } from "react-table";
import { extractChildrenProps } from "@paprika/helpers";

import { InfiniteLoader, InfiniteLoaderImpl, InfiniteLoaderPublicProps } from "./components/InfiniteLoader";
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
  columns: ReactTableColumn<TableDataItemType>[];
  data: TableDataItemType[];
  children: React.ReactNode;
}): JSX.Element {
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
    <sc.Wrapper>
      <div {...tableInstance.getTableProps()} className="table sticky">
        <div style={{ position: "relative", flex: 1, zIndex: 0 }}>
          <ReactTableContext.Provider value={tableInstance}>
            <InfiniteLoaderImpl
              data={data}
              Row={TableRow}
              innerElementType={InnerElement}
              {...infiniteLoaderPublicProps}
            />
          </ReactTableContext.Provider>
        </div>
      </div>
    </sc.Wrapper>
  );
}
