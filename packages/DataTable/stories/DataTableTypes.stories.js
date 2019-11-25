import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { RowHeight, Sort } from "../src";
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

const mockData = fixtures(1);
function App() {
  return (
    <DataTable keygen="id" data={mockData} height={window.innerHeight}>
      <DataTable.Navigation>
        <Sort />
        <RowHeight />
      </DataTable.Navigation>
      <DataTable.ColumnDefinition id="country" width="190" header="Country" cell={cell => getFlag(cell)} />
      <DataTable.ColumnDefinition
        id="name"
        header="Name"
        cell="name"
        sortDirections={[DataTable.SortDirections.ASCEND]}
        type="TEXT"
      />
      <DataTable.ColumnDefinition
        id="goals"
        header="Goals"
        cell="goals"
        sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
        type="NUMBER"
      />
      <DataTable.ColumnDefinition
        id="joined"
        header="Joined since"
        cell={dateString => dateString}
        type="DATE"
        parsingFormat="MM/DD/YYYY"
        sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
      />
    </DataTable>
  );
}

storiesOf("DataTable", module).add("DataTable with column types", () => <App />);
