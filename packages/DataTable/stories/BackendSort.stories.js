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

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const customReducer = async (state, action) => {
    return new Promise(resolve => {
      if (action.type === "SORT") {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          resolve({
            ...action.changes,
            sortColumn: action.payload.columnId,
            sortDirection: action.payload.direction,
            sortedOrder: [...mockData].sort(() => 0.5 - Math.random()).map(item => item.id),
          });
        }, 1000);
      }
      return action.changes;
    });
  };

  return (
    <React.Fragment>
      <DataTable
        keygen="id"
        data={mockData}
        height={window.innerHeight}
        reducers={[customReducer]}
        isLoading={isLoading}
      >
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
