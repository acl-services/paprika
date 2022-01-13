import React from "react";
import DataTable from "../../src";
import makeData from "../helpers/makeData";

const SimpleStory: () => JSX.Element = () => {
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
    []
  );

  const [items, setItems] = React.useState(() => makeData(40));

  return (
    <DataTable a11yText="A simple data table." height={500} width={477} columns={columns} data={items}>
      <DataTable.InfiniteLoader
        itemCount={items.length}
        isItemLoaded={index => items[index] !== undefined}
        loadMoreItems={async () => {
          // do nothing
        }}
      />
    </DataTable>
  );
};

export default SimpleStory;
