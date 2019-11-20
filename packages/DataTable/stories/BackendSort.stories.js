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

const mockData = fixtures(1);
const sortedData = [...mockData].sort((itemA, itemB) => itemB.id - itemA.id && itemB.goals - itemA.goals);

function App() {
  const customReducer = (state, action) => {
    if (action.type === "SORT") return { ...action.changes, sortedOrder: sortedData.map(item => item.id) };
    return action.changes;
  };

  return (
    <React.Fragment>
      <DataTable keygen="id" data={mockData} height={window.innerHeight} plugins={[customReducer]}>
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell={cell => getFlag(cell)} />
        <DataTable.ColumnDefinition
          id="name"
          header="Name"
          cell="name"
          sortDirections={[DataTable.SortDirections.ASCEND]}
        />
        <DataTable.ColumnDefinition
          id="goals"
          header="Goals"
          cell="goals"
          sortDirections={DataTable.SortDirections.DEFAULT}
        />
        <DataTable.ColumnDefinition
          id="status"
          header="Status"
          cell="status"
          sortDirections={DataTable.SortDirections.DEFAULT}
        />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Sortable DataTable(back-end)", () => <App />);
