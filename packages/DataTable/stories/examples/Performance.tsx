import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { select } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import DataTable from "../../src";

function makeData(rows: string, columns: string) {
  return [...Array(parseInt(rows, 10))].map((value, rowIndex) => {
    return [...Array(parseInt(columns, 10))].reduce(
      (res, value, columnIndex) => {
        res[`col${columnIndex}`] = `Cell ${rowIndex} ${columnIndex}`;
        return res;
      },
      {} as Record<string, string>
    );
  });
}

interface Settings {
  rows: string;
  columns: string;
}

const settings = () => ({
  rows: select("Number of rows", ["100", "1000", "10000", "100000"], "1000"),
  columns: select("Number of columns", ["10", "100", "1000", "10000", "100000"], "10"),
});

const PerformanceStory: (settings: Settings) => JSX.Element = ({ rows, columns }) => {
  const columnsProp = React.useMemo(
    () =>
      [...Array(parseInt(columns, 10))].map((value, index) => ({
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

      <DataTable
        a11yText="Data table for performance testing."
        maxHeight="calc(100vh-160px)"
        maxWidth="calc(100vw-80px)"
        columns={columnsProp}
        data={items}
      >
        <DataTable.InfiniteLoader
          itemCount={parseInt(rows, 10)}
          isItemLoaded={() => true}
          loadMoreItems={async () => {
            // do nothing
          }}
        />
      </DataTable>
    </Story>
  );
};

export default () => <PerformanceStory {...settings()} />;
