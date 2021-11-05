/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from "react";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import ReactInfiniteLoader from "react-window-infinite-loader";
import calculateRowHeight from "../../helpers/calculateRowHeight";
import { TableDataItemType } from "../../types";

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
}

export function InfiniteLoaderImpl({
  isItemLoaded,
  loadMoreItems,
  data,
  Row,
  innerElementType,
  itemCount,
  minimumBatchSize = 10,
  threshold = 15,
}: InfiniteLoaderPrivateProps & InfiniteLoaderPublicProps): JSX.Element {
  const infiniteLoaderRef = React.useRef(null);
  const listRef = React.useRef(null);
  const rowHeights = React.useRef<Record<number, number>>({});

  function getItemSize(index: number): number {
    if (!rowHeights.current[index]) {
      const newRowHeight = calculateRowHeight(data[index]);
      rowHeights.current[index] = newRowHeight;
    }

    return rowHeights.current[index];
  }

  return (
    <ReactInfiniteLoader
      ref={infiniteLoaderRef}
      isItemLoaded={isItemLoaded}
      loadMoreItems={loadMoreItems}
      itemCount={itemCount}
      minimumBatchSize={minimumBatchSize}
      threshold={threshold}
    >
      {({ onItemsRendered }) => (
        <VariableSizeList
          height={500}
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
