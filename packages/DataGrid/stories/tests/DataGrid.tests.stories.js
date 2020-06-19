import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import fixtures from "../helpers/fixtures";
import { App as Stress } from "../DataGrid.stressing.stories";
import DataGrid from "../../src";

const storyName = getStoryName("DataGrid");

storiesOf(`${storyName}/Backyard/Tests`, module)
  .add("Custom CSS", () => {
    const style = {
      background: "rgb(204, 229, 253)",
    };
    const data = [
      /* column */ /* colum */
      { myColum1: 1, myColum2: "hi" }, // row 1
      { myColum1: 2, myColum2: "hello" }, // row 2
      { myColum1: 3, myColum2: "hola" }, // row 3
    ];
    return (
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition header="Column 1" cell="myColum1" />
        <DataGrid.ColumnDefinition header="Column 2" cell="myColum2" cellProps={() => ({ style })} />
      </DataGrid>
    );
  })
  .add("Callback Function", () => {
    return (
      <DataGrid data={fixtures(2)} width={680}>
        {React.useCallback(
          (() => {
            return (
              <DataGrid.ColumnDefinition
                onClick={({ row }) => {
                  alert(row.name);
                }}
                header="alert"
                cell={() => "click me"}
              />
            );
          })(),
          []
        )}
        <DataGrid.ColumnDefinition header="Name" cell="name" />
        <DataGrid.ColumnDefinition header="Countries" cell="country" />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
        <DataGrid.ColumnDefinition header="Status" cell="status" />
      </DataGrid>
    );
  })
  .add("Infinity Scroll", () => {
    return <Stress overrideWidth={680} numberOfColumns={15} rowsOffset={120} />;
  });
