import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";

const flags = {
  Austria: "🇦🇹",
  Mexico: "🇲🇽",
  Brazil: "🇧🇷",
  Hungary: "🇭🇺",
  Germany: "🇩🇪",
  Portugal: "🇵🇹",
  Argentina: "🇦🇷",
  Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Sweden: "🇸🇪",
  England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Poland: "🇵🇱",
};

function getFlag(cell) {
  if (cell in flags) {
    return flags[cell];
  }

  return cell;
}

const data = fixtures(1000);
function App() {
  return (
    <DataTable data={data} height={window.innerHeight}>
      <DataTable.ColumnDefinition id="country" width="190" header="Country" cell={cell => getFlag(cell)} />
      <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
      <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
      <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
    </DataTable>
  );
}

storiesOf("DataTable", module).add("Showcase", () => <App />);
