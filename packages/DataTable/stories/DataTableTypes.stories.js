import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { RowHeight, Sort } from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const mockData = fixtures(1);
function App() {
  return (
    <DataTable keygen="id" defaultData={mockData} width={1024} height={viewPortHeight()}>
      <DataTable.Navigation>
        <Sort />
        <RowHeight />
      </DataTable.Navigation>
      <DataTable.ColumnDefinition
        id="joined"
        header="Joined since"
        type={DataTable.ColumnTypes.DATE}
        cell={row => row.joined}
        momentParsingFormat="MM/DD/YYYY"
        sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
      />
      <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" />
      <DataTable.ColumnDefinition
        id="name"
        header="Name"
        cell="name"
        sortDirections={[DataTable.SortDirections.ASCEND]}
      />
      <DataTable.ColumnDefinition
        id="goals"
        header="Goals"
        cell="goals"
        sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
        type={DataTable.ColumnTypes.NUMBER}
      />
      <DataTable.ColumnDefinition
        id="status"
        header="Status"
        cell="status"
        sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
      />
    </DataTable>
  );
}

storiesOf("DataTable", module).add("DataTable with column types", () => <App />);
