import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

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

function getFlag(row) {
  return flags[row.country] || row.country;
}

const data = fixtures(1);
function App() {
  return (
    <React.Fragment>
      <DataTable keygen="id" defaultData={data} height={viewPortHeight()}>
        <DataTable.ColumnDefinition id="country" width="60" header="Country" cell={row => getFlag(row)} />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Showcase", () => <App />);
