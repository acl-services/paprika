import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import DataTable, { RowHeight, Sort, Filters } from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const mockData = fixtures(1);
function App() {
  const [data, setData] = React.useState(mockData);
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setData([]);
        }}
      >
        Clear data
      </Button>
      <DataTable keygen="id" data={data} height={viewPortHeight()}>
        <DataTable.Navigation>
          <Sort />
          <RowHeight />
          <Filters />
        </DataTable.Navigation>
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" />
        <DataTable.ColumnDefinition
          id="name"
          header="Name"
          cell="name"
          type="TEXT"
          sortDirections={[DataTable.SortDirections.ASCEND]}
        />
        <DataTable.ColumnDefinition
          id="goals"
          header="Goals"
          cell="goals"
          type="NUMBER"
          sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
        />
        <DataTable.ColumnDefinition
          id="status"
          header="Status"
          cell="status"
          sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
        />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Sortable DataTable", () => <App />);
