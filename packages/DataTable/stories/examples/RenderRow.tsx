import React from "react";
import DataTable from "../../src";
import makeData from "../helpers/makeData";

const RenderRow: () => JSX.Element = () => {
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

  const data = React.useMemo(() => makeData(40), []);

  // eslint-disable-next-line react/no-unused-prop-types
  function renderRow({ index }: { index: number }) {
    if (index === 0 || index % 4 !== 0) return;

    return (
      <div role="columnheader" style={{ padding: "8px", borderBottom: "1px solid grey", width: "100%" }}>
        {`Group ${index / 4}`}
      </div>
    );
  }

  return (
    <DataTable a11yText="A simple data table." maxHeight="500px" columns={columns} data={data} renderRow={renderRow}>
      <DataTable.InfiniteLoader
        itemCount={data.length}
        isItemLoaded={index => data[index] !== undefined}
        loadMoreItems={async () => {
          // do nothing
        }}
      />
    </DataTable>
  );
};

export default RenderRow;
