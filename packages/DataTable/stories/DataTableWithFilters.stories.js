import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { Filters } from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const mockData = fixtures(1);
function App() {
  return (
    <DataTable keygen="id" data={mockData} height={viewPortHeight()}>
      <DataTable.Navigation>
        <Filters />
      </DataTable.Navigation>
      <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" type="TEXT" />
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
        type="TEXT"
        sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
      />
    </DataTable>
  );
}

storiesOf("DataTable", module).add("DataTable with filters", () => <App />);
