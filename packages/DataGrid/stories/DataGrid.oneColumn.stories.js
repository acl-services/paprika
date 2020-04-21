import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import DataGrid from "../src";

const data = [
  {
    name: "Josef Bican ‡",
  },
  {
    name: "Romário",
  },
  {
    name: "Pelé",
  },
];

export function App() {
  return (
    <Sbook.Story>
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition header="Name" cell="name" />
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf("Data Grid / regular", module).add("One column", () => <App />);
