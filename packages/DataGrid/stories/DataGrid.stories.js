import React from "react";
import { storiesOf } from "@storybook/react";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";
// import { viewPortHeight } from "./helpers";

const data = fixtures(1);

function App() {
  return (
    <React.Fragment>
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition header="Country" cell="country" />
        <DataGrid.ColumnDefinition header="Name" cell="name" />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
        <DataGrid.ColumnDefinition header="Status" cell="status" />
        <DataGrid.ColumnDefinition header="Status 2" cell="status" />
        <DataGrid.ColumnDefinition header="Status 3" cell="status" />
      </DataGrid>
    </React.Fragment>
  );
}

storiesOf("DataGrid", module).add("Showcase", () => <App />);
