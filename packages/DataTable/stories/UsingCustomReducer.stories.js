import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { Sort } from "../src";
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
        <DataTable.Navigation>
          <Sort></Sort>
        </DataTable.Navigation>
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Using custom reducers", () => <App />);
