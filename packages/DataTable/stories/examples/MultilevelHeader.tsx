import React from "react";
import { select, boolean } from "@storybook/addon-knobs";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
import DataTable from "../../src";
import { DataTableProps } from "../../src/DataTable";
import makeData from "../helpers/makeData";

const props = () => ({
  borderType: select("borderType", ["grid", "none", "horizontal", "vertical"], "horizontal"),
  hasZebraStripes: boolean("hasZebraStripes", false),
  isHeaderSticky: boolean("isHeaderSticky", true),
});

export const MultilevelHeaderStory: (props: Partial<DataTableProps>) => JSX.Element = props => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        isSticky: true,
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
            width: 100,
          },
          {
            Header: "Last Name",
            accessor: "lastName",
            width: 100,
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
            width: 50,
          },
          {
            Header: "Visits",
            accessor: "visits",
            width: 60,
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
      {
        Header: " ",
        columns: [
          {
            Header: "Description",
            accessor: "desc",
          },
        ],
      },
      {
        Header: " ",
        columns: [
          {
            Header: "More description",
            accessor: "desc_more",
          },
        ],
      },
      {
        Header: " ",
        columns: [
          {
            Header: "Background",
            accessor: "background",
            width: 300,
          },
        ],
      },
      {
        Header: " ",
        columns: [
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const [items, setItems] = React.useState(() => makeData(5));

  return (
    <DataTable
      a11yText="Multi-level header data table."
      maxHeight="500px"
      maxWidth="800px"
      columns={columns}
      data={items}
      {...props}
    >
      <DataTable.InfiniteLoader
        itemCount={items.length + 1}
        isItemLoaded={index => items[index] !== undefined}
        isNextPageLoading={false}
        loadMoreItems={async () => {
          const newItems = await new Promise<Record<string, unknown>[]>(res =>
            setTimeout(() => res(makeData(40)), 5000)
          );

          setItems(items.concat(newItems));
        }}
      />
    </DataTable>
  );
};

export default () => (
  <Story>
    <StoryHeading level={1}>DataTable with multi-level header.</StoryHeading>
    <MultilevelHeaderStory {...props()} />
  </Story>
);
