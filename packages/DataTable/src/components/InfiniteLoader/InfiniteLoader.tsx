import React from "react";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import isEqual from "lodash.isequal";
import { usePrevious } from "@paprika/helpers";
import ReactInfiniteLoader from "react-window-infinite-loader";
import TableRow from "../TableRow/TableRow";
import { TableDataItemType } from "../../types";
import useItemSizeCalculator from "./useItemSizeCalculator";

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
   * If true, will prevent the InfiniteLoader from asking to load more than once at a time
   */
  isNextPageLoading?: boolean;
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
  innerElementType: (props: { children: React.ReactNode }) => JSX.Element;
  height: number;
  getRowHeight: ((index: number) => number) | null;
  shouldHaveHorizontalScroll: boolean;
  shouldHaveVerticalScroll: boolean;
  resetDimension: () => void;
}

function Row(props: ListChildComponentProps): JSX.Element {
  return <TableRow index={props.index} style={props.style} />;
}

/**
 * Only load 1 page of items at a time.
 * Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
 */
const emptyLoadMore = (_startIndex: number, _stopIndex: number) => undefined;

export function InfiniteLoaderImpl({
  data,
  getRowHeight,
  height,
  innerElementType,
  isItemLoaded,
  itemCount,
  loadMoreItems,
  shouldHaveHorizontalScroll,
  shouldHaveVerticalScroll,
  isNextPageLoading = false,
  minimumBatchSize = 10,
  threshold = 15,
  resetDimension,
}: InfiniteLoaderPrivateProps & InfiniteLoaderPublicProps): JSX.Element {
  const infiniteLoaderRef = React.useRef(null);
  const listRef = React.useRef<VariableSizeList>(null);
  const isLoadingMoreItemsRef = React.useRef(false);
  const { getItemSize, clearRowHeights } = useItemSizeCalculator(data, getRowHeight);

  const prevData: TableDataItemType[] | undefined = usePrevious(data);

  React.useLayoutEffect(() => {
    if (!isLoadingMoreItemsRef.current && prevData && listRef.current) {
      if (data.length !== prevData.length) {
        resetDimension();
      } else {
        const changedIndexes: number[] = [];
        prevData.forEach((row: TableDataItemType, index: number) => {
          if (!isEqual(row, data[index])) {
            changedIndexes.push(index);
          }
        });
        if (changedIndexes.length > 0) {
          console.log(changedIndexes);
          clearRowHeights(changedIndexes);
          listRef.current.resetAfterIndex(changedIndexes[0]);
          setTimeout(resetDimension, 100);
        }
      }
    }
  }, [data, prevData, clearRowHeights, resetDimension]);

  async function handleLoadMoreItems() {
    isLoadingMoreItemsRef.current = true;
    await loadMoreItems();

    if (listRef.current) {
      listRef.current.resetAfterIndex(itemCount - 1);
    }
    isLoadingMoreItemsRef.current = false;
  }

  return (
    <ReactInfiniteLoader
      ref={infiniteLoaderRef}
      isItemLoaded={isItemLoaded}
      loadMoreItems={isNextPageLoading ? emptyLoadMore : handleLoadMoreItems}
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
          ref={listRef}
          innerElementType={innerElementType}
          style={{
            overflowX: shouldHaveHorizontalScroll ? "auto" : "hidden",
            overflowY: shouldHaveVerticalScroll ? "auto" : "hidden",
          }}
        >
          {Row}
        </VariableSizeList>
      )}
    </ReactInfiniteLoader>
  );
}

export const InfiniteLoader: React.FC<InfiniteLoaderPublicProps> = (props: InfiniteLoaderPublicProps) => {
  return <></>;
};

InfiniteLoader.displayName = "DataTable.InfiniteLoader";
