import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import DataGrid from "../src";

const storyName = getStoryName("DataGrid");

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

storiesOf(`${storyName}/Examples`, module).add("One column", () => <App />);
