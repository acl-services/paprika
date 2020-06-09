import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import DataGrid from "../src";

const storyName = getStoryName("DataGrid");

const data = [
  {
    country: "Austria",
    name: "Josef Bican ‡",
    goals: 805,
    status: "inactive",
    joined: "12/12/2019",
    description: `Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens furry treats fish.`,
    link: "https://wegalvanize.com",
  },
  {
    country: "Brazil",
    name: "Romário",
    goals: 772,
    status: "inactive",
    joined: "08/11/2019",
    description: `Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens furry treats fish.`,
    link: "https://wegalvanize.com",
  },
  {
    country: "Brazil",
    name: "Pelé",
    goals: 767,
    status: "inactive",
    joined: "04/01/2014",
    description: `Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens furry treats fish.`,
    link: "https://wegalvanize.com",
  },
];

export function App() {
  return (
    <Sbook.Story>
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition header="Name" cell="name" />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
        <DataGrid.ColumnDefinition header="Status" cell="status" />
        <DataGrid.ColumnDefinition header="Link" cell="link" />
        <DataGrid.ColumnDefinition header="Description" cell="description" />
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf(storyName, module).add("Showcase", () => <App />);
