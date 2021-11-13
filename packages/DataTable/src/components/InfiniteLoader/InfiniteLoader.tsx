/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from "react";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import ReactInfiniteLoader from "react-window-infinite-loader";
import RowHeightHelper from "../../helpers/rowHeightHelper";
import { useReactTableContext } from "../ReactTableContext";
import { TableColumnsWidth, TableDataItemType } from "../../types";

const rowHeightHelper = new RowHeightHelper();

export interface InfiniteLoaderPublicProps {
  /**
   * Function responsible for tracking the loaded state of each item.
   */
  isItemLoaded: (index: number) => boolean;
  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  itemCount: number;
  /**
   * Callback to be invoked when more rows must be loaded.
   * It should return a Promise that is resolved once all data has finished loading.
   */
  loadMoreItems: () => Promise<void>;
  /**
   * Minimum number of rows to be loaded at a time; defaults to 10. This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize?: number;
  /**
   * Threshold at which to pre-fetch data; defaults to 15. A threshold of 15 means that data will start loading when a user scrolls within 15 rows.
   */
  threshold?: number;
}

interface InfiniteLoaderPrivateProps {
  data: TableDataItemType[];
  Row: React.ComponentType<ListChildComponentProps>;
  innerElementType: (props: { children: React.ReactNode }) => JSX.Element;
  height: number;
  getRowHeight: ((index: number) => number) | null;
}

export function InfiniteLoaderImpl({
  isItemLoaded,
  loadMoreItems,
  data,
  Row,
  height,
  getRowHeight,
  innerElementType,
  itemCount,
  minimumBatchSize = 10,
  threshold = 15,
}: InfiniteLoaderPrivateProps & InfiniteLoaderPublicProps): JSX.Element {
  const infiniteLoaderRef = React.useRef(null);
  const listRef = React.useRef<VariableSizeList>(null);
  const rowHeights = React.useRef<Record<number, number>>({});
  const { allColumns } = useReactTableContext();
  const columnsWidth = React.useMemo(
    () =>
      allColumns.reduce(
        (res, column) => {
          res[column.id] = column.totalWidth;
          return res;
        },
        {} as TableColumnsWidth
      ),
    [allColumns]
  );

  function getItemSize(index: number): number {
    if (!rowHeights.current[index]) {
      const newRowHeight =
        getRowHeight && typeof getRowHeight === "function"
          ? getRowHeight(index)
          : rowHeightHelper.calculate({
              rowData: data[index],
              columnsWidth,
            });

      if (!data[index]) {
        return newRowHeight;
      }

      rowHeights.current[index] = newRowHeight;
    }

    return rowHeights.current[index];
  }

  async function handleLoadMoreItems() {
    await loadMoreItems();

    if (listRef.current) {
      listRef.current.resetAfterIndex(itemCount - 1);
    }
  }

  return (
    <ReactInfiniteLoader
      ref={infiniteLoaderRef}
      isItemLoaded={isItemLoaded}
      loadMoreItems={handleLoadMoreItems}
      itemCount={itemCount}
      minimumBatchSize={minimumBatchSize}
      threshold={threshold}
    >
      {({ onItemsRendered }) => (
        <VariableSizeList
          height={height}
          itemCount={itemCount}
          itemSize={getItemSize}
          width="100%"
          onItemsRendered={onItemsRendered}
          // ref={ref}
          ref={listRef}
          innerElementType={innerElementType}
        >
          {Row}
        </VariableSizeList>
      )}
    </ReactInfiniteLoader>
  );
}

InfiniteLoaderImpl.displayName = "DataTable.InfiniteLoader";

/* eslint-disable react/no-unused-prop-types */
export function InfiniteLoader(props: InfiniteLoaderPublicProps): JSX.Element {
  return <></>;
}
/* eslint-enable react/no-unused-prop-types */
