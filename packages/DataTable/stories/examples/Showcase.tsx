import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { select, boolean } from "@storybook/addon-knobs";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import * as DataTable from "../../src";
import { TableProps } from "../../src/DataTable";
import makeData from "../helpers/makeData";

const props = () => ({
  borderType: select("borderType", ["grid", "none", "horizontal", "vertical"], "horizontal"),
  hasZebraStripes: boolean("hasZebraStripes", false),
  isHeaderSticky: boolean("isHeaderSticky", true),
});

const ShowcaseStory: (props: Partial<TableProps>) => JSX.Element = props => {
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

  const [, setState] = React.useState(0);
  const [items, setItems] = React.useState(() => makeData(40));

  return (
    <Story>
      <StoryHeading level={1}>DataTable</StoryHeading>
      <Tagline>DataTable component.</Tagline>
      <button
        type="button"
        onClick={() => {
          setState(x => x + 1);
        }}
      >
        Click me
      </button>

      <br />

      <DataTable.Table a11yText="Table a11y text." height={500} width={800} columns={columns} data={items} {...props}>
        <DataTable.InfiniteLoader
          itemCount={items.length + 1}
          isItemLoaded={index => items[index] !== undefined}
          loadMoreItems={async () => {
            const newItems = await new Promise<Record<string, unknown>[]>(res =>
              setTimeout(() => res(makeData(40)), 5000)
            );

            setItems(items.concat(newItems));
          }}
        />

        {/* <Table.ColumnDefinition isSticky columnId="controlId" width={50}>
          <Table.HeaderDefinition headerId="efefwef">{() => {}}</Table.HeaderDefinition>
          <Table.CellDefinition>{() => {}}</Table.CellDefinition>
        </Table.ColumnDefinition> */}
      </DataTable.Table>
    </Story>
  );
};

export default () => <ShowcaseStory {...props()} />;
