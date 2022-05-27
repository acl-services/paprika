import React from "react";
import DataTable from "../../src";
import makeData from "../helpers/makeData";

const UsingCalc: () => JSX.Element = () => {
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
      {
        Header: "Description",
        accessor: "desc",
        width: 400,
      },
    ],
    []
  );

  const [items] = React.useState(() => makeData(80));

  return (
    <div style={{ width: "100vw", height: "100vh", background: "lightgrey" }}>
      <div style={{ height: "40px", background: "lightblue" }}>Top bar</div>
      <div style={{ display: "flex", height: "calc(100vh-40px)" }}>
        <div style={{ width: "40px", background: "lightpink" }}>Side bar</div>
        <DataTable
          a11yText="A data table example."
          maxHeight="calc(100vh-40px)"
          maxWidth="calc(100vw-40px)"
          columns={columns}
          data={items}
        >
          <DataTable.InfiniteLoader
            itemCount={items.length}
            isItemLoaded={index => items[index] !== undefined}
            loadMoreItems={async () => {
              // do nothing
            }}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default UsingCalc;
