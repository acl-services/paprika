import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { RowHeight } from "../src";
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
    <React.Fragment>
      <DataTable keygen="id" data={data} height={window.innerHeight - 130}>
        <DataTable.TopNavigation>
          <RowHeight />
        </DataTable.TopNavigation>
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell={cell => getFlag(cell)} />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Navigation", () => <App />);
