import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { select } from "@storybook/addon-knobs";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import * as DataTable from "../../src";

function makeData(rows: number, columns: number) {
  return [...Array(rows)].map((value, rowIndex) => {
    return [...Array(columns)].reduce(
      (res, value, columnIndex) => {
        res[`col${columnIndex}`] = `Cell ${rowIndex} ${columnIndex}`;
        return res;
      },
      {} as Record<number, string>
    );
  });
}

interface Settings {
  rows: number;
  columns: number;
}

const settings = () => ({
  rows: select("Number of rows", [100, 1000, 10000, 100000], 1000),
  columns: select("Number of columns", [10, 100, 1000, 10000, 100000], 10),
});

const PerformanceStory: (settings: Settings) => JSX.Element = ({ rows, columns }) => {
  const columnsProp = React.useMemo(
    () =>
      [...Array(columns)].map((value, index) => ({
        Header: `Column ${index}`,
        accessor: `col${index}`,
        width: 80,
      })),
    [columns]
  );

  const [, setState] = React.useState(0);
  const [items, setItems] = React.useState(() => makeData(rows, columns));

  React.useEffect(() => {
    setItems(makeData(rows, columns));
  }, [rows, columns]);

  return (
    <Story>
      <StoryHeading level={1}>DataTable performance test</StoryHeading>
      <button
        type="button"
        onClick={() => {
          setState(x => x + 1);
        }}
      >
        Click me
      </button>

      <br />

      <DataTable.Table columns={columnsProp} data={items}>
        <DataTable.InfiniteLoader
          itemCount={rows}
          isItemLoaded={() => true}
          loadMoreItems={async () => {
            console.log();
          }}
        />
      </DataTable.Table>
    </Story>
  );
};

export default () => <PerformanceStory {...settings()} />;
