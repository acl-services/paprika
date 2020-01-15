import React from "react";
import { storiesOf } from "@storybook/react";
import DataGrid from "../src";
// import { viewPortHeight } from "./helpers";

// const flags = {
//   Austria: "🇦🇹",
//   Mexico: "🇲🇽",
//   Brazil: "🇧🇷",
//   Hungary: "🇭🇺",
//   Germany: "🇩🇪",
//   Portugal: "🇵🇹",
//   Argentina: "🇦🇷",
//   Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
//   Sweden: "🇸🇪",
//   England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
//   Poland: "🇵🇱",
// };
//
// function getFlag(row) {
//   return flags[row.country] || row.country;
// }

// const data = fixtures(1);
// <DataGrid.ColumnDefinition width="60" header="Country" cell={row => getFlag(row)} />
// <DataGrid.ColumnDefinition header="Name" cell="name" />
// <DataGrid.ColumnDefinition header="Goals" cell="goals" />
// <DataGrid.ColumnDefinition header="Status" cell="status" />

function App() {
  return (
    <React.Fragment>
      <DataGrid />
    </React.Fragment>
  );
}

storiesOf("DataGrid", module).add("Showcase", () => <App />);
