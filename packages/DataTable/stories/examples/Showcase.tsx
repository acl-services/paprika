import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Tagline } from "storybook/assets/styles/common.styles";
import * as DataTable from "../../src";
import makeData from "../helpers/makeData";

const ShowcaseStory: () => JSX.Element = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        // sticky: "left",
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
        // sticky: "right",
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
  const [items, setItems] = React.useState(() => makeData(40));

  return (
    <Story>
      <StoryHeading level={1}>DataTable</StoryHeading>
      <Tagline>DataTable component.</Tagline>
      <div>
        <button
          type="button"
          onClick={() => {
            setItems(makeData(40));
          }}
        >
          Reset state
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setParentState(x => x + 1);
          }}
        >
          Update parent state
        </button>
      </div>

      <br />

      <DataTable.Table columns={columns} data={items}>
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
    </Story>
  );
};

export default ShowcaseStory;
