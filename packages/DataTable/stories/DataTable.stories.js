import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "../src";
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
    <Table data={data} height={window.innerHeight}>
      <Table.ColumnDefinition id="country" width="190" header="Country" cell={cell => getFlag(cell)} />
      <Table.ColumnDefinition id="name" header="Name" cell="name" />
      <Table.ColumnDefinition id="goals" header="Goals" cell="goals" />
      <Table.ColumnDefinition id="status" header="Status" cell="status" />
    </Table>
  );
}

storiesOf("DataTable", module).add("Showcase", () => <App />);
