import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";
import sort from "../src/helpers/sort";
import { viewPortHeight } from "./helpers";

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
            sortedOrder: sort({ mockData, columnId: action.payload.columnId, direction: action.payload.direction }).map(
              item => item.id
            ),
          });
        }, 1000);
      }
      return action.changes;
    });
  };

  return (
    <React.Fragment>
      <DataTable keygen="id" data={mockData} height={viewPortHeight()} reducers={[customReducer]} isLoading={isLoading}>
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" />
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
          sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
        />
        <DataTable.ColumnDefinition
          id="status"
          header="Status"
          cell="status"
          sortDirections={[DataTable.SortDirections.ASCEND, DataTable.SortDirections.DESCEND]}
        />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Sortable DataTable(back-end)", () => <App />);
