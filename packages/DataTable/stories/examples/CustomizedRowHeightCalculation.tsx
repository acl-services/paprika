import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story } from "storybook/assets/styles/common.styles";
// import RowHeightHelper from "@paprika/data-table/RowHeightHelper";
import RowHeightHelper from "../../src/helpers/rowHeightHelper";
import DataTable from "../../src";
import makeData from "../helpers/makeData";

const rowHeightHelper = new RowHeightHelper({
  defaultHeight: 100,
});

function OperationCell(): JSX.Element {
  return (
    <>
      <button type="button">edit</button>
      <button type="button">delete</button>
    </>
  );
}

const memorizedOperationCell = React.memo(OperationCell);

const CustomizedRowHeightCalculationStory: () => JSX.Element = () => {
  const columns = React.useMemo(
    () => [
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
      {
        Header: "Description",
        accessor: "desc",
        width: 600,
      },
      {
        Header: "Operations",
        accessor: "operations",
        width: 200,
        Cell: memorizedOperationCell,
      },
    ],
    []
  );

  const [items, setItems] = React.useState(() => makeData(40));

  function getRowHeight(index: number) {
    // By doing this, the row height calculation will be faster since it's only calculating the styles based on one column
    return rowHeightHelper.calculate({
      rowData: { desc: items[index] ? items[index].desc : "" },
      columnsWidth: {
        desc: 600,
      },
    });
  }

  return (
    <Story>
      <StoryHeading level={1}>DataTable with customized row height calculation</StoryHeading>

      <DataTable
        a11yText="Data table with customized row height calculation."
        maxHeight="500px"
        columns={columns}
        data={items}
        getRowHeight={getRowHeight}
      >
        <DataTable.InfiniteLoader
          itemCount={items.length + 1}
          isItemLoaded={(index: number) => items[index] !== undefined}
          loadMoreItems={async () => {
            const newItems = await new Promise<Record<string, unknown>[]>(res =>
              setTimeout(() => res(makeData(40)), 5000)
            );

            setItems(items.concat(newItems));
          }}
        />
      </DataTable>
    </Story>
  );
};

export default CustomizedRowHeightCalculationStory;
