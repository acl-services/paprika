import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { Filters, Sort, ColumnManaging } from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const mockData = fixtures(1);
function App() {
  return (
    <DataTable idKey="my-table-id" keygen="id" data={mockData} height={viewPortHeight()}>
      <DataTable.Navigation>
        <Filters />
        <Sort />
        <ColumnManaging />
      </DataTable.Navigation>
      <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" type="TEXT" />
      <DataTable.ColumnDefinition id="name" header="Name" cell="name" type="TEXT" />
      <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" type="NUMBER" />
      <DataTable.ColumnDefinition id="status" header="Status" cell="status" type="TEXT" />
      <DataTable.ColumnDefinition
        id="joined"
        header="Joined since"
        type={DataTable.ColumnTypes.DATE}
        cell={row => row.joined}
        momentParsingFormat="MM/DD/YYYY"
      />
    </DataTable>
  );
}

storiesOf("DataTable", module).add("Memorized table navigation", () => <App />);
