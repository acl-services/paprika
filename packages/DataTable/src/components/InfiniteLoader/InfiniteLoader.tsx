import React from "react";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import ReactInfiniteLoader from "react-window-infinite-loader";
import calculateRowHeight from "../../helpers/calculateRowHeight";

export function InfiniteLoaderImpl({
  loadMoreItems,
  data,
  Row,
  innerElementType,
}: {
  loadMoreItems: () => Promise<void>;
  data: any;
  Row: React.ComponentType<ListChildComponentProps>;
  innerElementType: (props: any) => JSX.Element;
}): JSX.Element {
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

  // TODO: ???? listRef.current?.resetAfterIndex(index);

  return (
    <ReactInfiniteLoader
      ref={infiniteLoaderRef}
      isItemLoaded={index => data[index] !== undefined}
      loadMoreItems={loadMoreItems}
      itemCount={data.length + 1}
    >
      {({ onItemsRendered }) => (
        <VariableSizeList
          height={500}
          itemCount={data.length + 1}
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

// eslint-disable-next-line react/no-unused-prop-types
export function InfiniteLoader(props: { loadMoreItems: () => Promise<void> }): JSX.Element {
  return <></>;
}
