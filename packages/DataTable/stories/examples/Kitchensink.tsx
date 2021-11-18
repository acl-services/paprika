import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { select, boolean } from "@storybook/addon-knobs";
import Button from "@paprika/button";
import { Story } from "storybook/assets/styles/common.styles";
import * as DataTable from "../../src";
import { TableProps } from "../../src/DataTable";
import makeData from "../helpers/makeData";

const props = () => ({
  borderType: select("borderType", ["grid", "none", "horizontal", "vertical"], "horizontal"),
  hasZebraStripes: boolean("hasZebraStripes", false),
  isHeaderSticky: boolean("isHeaderSticky", true),
});

function CustomCell(props: any) {
  const { row, extraCellProps, value } = props;

  return (
    <div>
      {String(value)}
      <Button
        onClick={() => {
          extraCellProps.onClick(row.index);
        }}
      >
        Update
      </Button>
    </div>
  );
}

export const KitchensinkStory: (props: Partial<TableProps>) => JSX.Element = props => {
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
            Cell: CustomCell,
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

  const [, setParentState] = React.useState(0);
  const [items, setItems] = React.useState(() => makeData(5));
  const [isVirtual, setIsVirtual] = React.useState(true);

  const updateName = (index: number) => {
    setItems(prev => [{ ...prev[index], firstName: `${makeData(1)[0].firstName}` }, ...prev.slice(1)]);
  };

  return (
    <>
      <div>
        <Button
          onClick={() => {
            setItems(makeData(40));
          }}
        >
          Reset state
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setParentState(x => x + 1);
          }}
        >
          Update parent state
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            setItems(prev => [...prev.slice(1)]);
          }}
        >
          Remove first row
        </Button>
      </div>

      <div>
        <Button
          onClick={() => {
            setIsVirtual(prev => !prev);
          }}
        >
          Toggle virtualization
        </Button>
        <b>{isVirtual ? "is ON" : "is OFF"}</b>
      </div>

      <br />

      <DataTable.Table
        a11yText="Table a11y text."
        height={500}
        columns={columns}
        data={items}
        extraCellProps={{ onClick: updateName }}
        {...props}
      >
        {isVirtual ? (
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
        ) : null}
      </DataTable.Table>
    </>
  );
};

export default () => (
  <Story>
    <StoryHeading level={1}>DataTable kitchensink</StoryHeading>
    <KitchensinkStory {...props()} />
  </Story>
);
