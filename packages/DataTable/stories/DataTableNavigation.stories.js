import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { RowHeight } from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const data = fixtures(1);

function App() {
  return (
    <React.Fragment>
      <DataTable keygen="id" defaultData={data} height={viewPortHeight()}>
        <DataTable.Navigation>
          <RowHeight />
        </DataTable.Navigation>
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Navigation", () => <App />);
