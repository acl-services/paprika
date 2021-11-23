import React from "react";
import { select, boolean } from "@storybook/addon-knobs";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import * as DataTable from "../../src";
import { TableProps } from "../../src/DataTable";
import makeData from "../helpers/makeData";

const props = () => ({
  borderType: select("borderType", ["grid", "none", "horizontal", "vertical"], "horizontal"),
  hasZebraStripes: boolean("hasZebraStripes", false),
  isHeaderSticky: boolean("isHeaderSticky", true),
});

export const ShowcaseStory: (props: Partial<TableProps>) => JSX.Element = props => {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        width: 100,
        isSticky: true,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        width: 100,
        isSticky: true,
      },
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
      {
        Header: "Description",
        accessor: "desc",
      },
      {
        Header: "More description",
        accessor: "desc_more",
      },
      {
        Header: "Background",
        accessor: "background",
        width: 300,
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
    []
  );

  const [items, setItems] = React.useState(() => makeData(5));

  return (
    <DataTable.Table
      a11yText="Data table for showcase."
      height={500}
      width={800}
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
    </DataTable.Table>
  );
};

export default () => (
  <Story>
    <StoryHeading level={1}>DataTable</StoryHeading>
    <Tagline>DataTable component.</Tagline>
    <ShowcaseStory {...props()} />
  </Story>
);
