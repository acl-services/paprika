import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";
import sort from "../src/helpers/sort";
import { viewPortHeight } from "./helpers";

const mockData = fixtures(1);

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData(mockData);
    }, 1000);
  }, []);

  const customReducer = async (state, action) => {
    return new Promise(resolve => {
      if (action.type === "SORT") {
        setIsLoading(true);
        setTimeout(() => {
          const backendSortResult = sort({
            data: fixtures(1),
            columnId: action.payload.columnId,
            direction: action.payload.direction,
            columnType: action.payload.columnId === "goals" ? "NUMBER" : "TEXT",
          });
          setIsLoading(false);
          resolve({
            ...action.changes,
            data: backendSortResult,
          });
        }, 1000);
      } else {
        return resolve(action.changes);
      }
    });
  };

  return (
    <React.Fragment>
      <DataTable keygen="id" data={data} height={viewPortHeight()} reducers={[customReducer]} isLoading={isLoading}>
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
