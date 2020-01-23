import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const data = fixtures(10);

export function App() {
  return (
    <React.Fragment>
      <Sbook.Story>
        <DataGrid data={data}>
          <DataGrid.ColumnDefinition
            width={40}
            headerA11yText={() => "unchecked"}
            cellA11yText={() => "unchecked"}
            header={props => (
              <DataGrid.RowIndicator hasIndexIndicator={false} isChecked={() => "unchecked"} {...props} />
            )}
            cell={props => <DataGrid.RowIndicator isChecked={() => "unchecked"} {...props} />}
          />
          <DataGrid.ColumnDefinition header="Countries" cell="country" />
          <DataGrid.ColumnDefinition header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Goals" cell="goals" />
          <DataGrid.ColumnDefinition header="Status" cell="status" />
          <DataGrid.ColumnDefinition header="Status 2" cell="status" />
          <DataGrid.ColumnDefinition header="Status 3" cell="status" />
        </DataGrid>
      </Sbook.Story>
    </React.Fragment>
  );
}

storiesOf("DataGrid / regular", module).add("Row indicator", () => <App />);
