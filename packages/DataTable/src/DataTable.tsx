import React from "react";
import { useTable, useBlockLayout } from "react-table";
import { VariableSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import calculateRowHeight from "./helpers/calculateRowHeight";
import * as sc from "./DataTable.styles";

export default function Table({
  columns,
  data: initialData,
  loadMoreItems,
}: {
  columns: any[];
  data: any[];
  loadMoreItems: () => void;
}): JSX.Element {
  const defaultColumn = React.useMemo(
    () => ({
      width: 150,
    }),
    []
  );

  const [data, setData] = React.useState(initialData);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, totalColumnsWidth } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout
  );
  const infiniteLoaderRef = React.useRef(null);
  const listRef = React.useRef(null);
  const rowHeights = React.useRef<Record<number, number>>({});

  const getItemSize = (index: number) => {
    if (!rowHeights.current[index]) {
      const newRowHeight = calculateRowHeight(data[index]);
      rowHeights.current[index] = newRowHeight;
    }

    return rowHeights.current[index];
  };

  const renderRow = ({ index, style }: any) => {
    const row = rows[index];
    if (!row) return <div>Loading...</div>;
    prepareRow(row);
    const { style: rowStyle, ...restRow } = row.getRowProps({ style });
    return (
      <div {...restRow} style={{ ...rowStyle, width: totalColumnsWidth }} className="tr">
        {row.cells.map(cell => {
          return (
            <div {...cell.getCellProps()} className="td">
              {cell.render("Cell")}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <sc.Wrapper>
      <div {...getTableProps()} className="table sticky">
        <div style={{ position: "relative", flex: 1, zIndex: 0 }}>
          <InfiniteLoader
            ref={infiniteLoaderRef}
            isItemLoaded={index => data[index] !== undefined}
            loadMoreItems={async () => {
              setData(data.concat(loadMoreItems()));
            }}
            itemCount={data.length + 1}
          >
            {({ onItemsRendered, ref }) => {
              return (
                <VariableSizeList
                  height={500}
                  itemCount={data.length + 1}
                  itemSize={getItemSize}
                  width="100%"
                  onItemsRendered={onItemsRendered}
                  // ref={ref}
                  ref={listRef}
                  innerElementType={({ children, style, ...rest }: any) => (
                    <>
                      <div className="header">
                        <div style={{ width: totalColumnsWidth }}>
                          {headerGroups.map(headerGroup => (
                            <div {...headerGroup.getHeaderGroupProps()} className="tr">
                              {headerGroup.headers.map(column => (
                                <div {...column.getHeaderProps()} className="th">
                                  {column.render("Header")}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ height: 500 - 58 - 57 }} className="body">
                        <div {...getTableBodyProps()} {...rest} style={style}>
                          {children}
                        </div>
                      </div>
                    </>
                  )}
                >
                  {renderRow}
                </VariableSizeList>
              );
            }}
          </InfiniteLoader>
        </div>
      </div>
    </sc.Wrapper>
  );
}
