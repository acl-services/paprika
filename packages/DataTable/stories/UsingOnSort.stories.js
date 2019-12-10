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

  function handleSort({ columnId, direction }) {
    setIsLoading(true);
    setTimeout(() => {
      const backendSortResult = sort({
        data: fixtures(1),
        columnId,
        direction,
        columnType: columnId === "goals" ? "NUMBER" : "TEXT",
      });
      setIsLoading(false);
      setData(backendSortResult);
    }, 1000);
  }

  return (
    <React.Fragment>
      <DataTable keygen="id" data={data} height={viewPortHeight()} isLoading={isLoading}>
        <DataTable.Navigation>
          <Sort onSort={handleSort}></Sort>
        </DataTable.Navigation>
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

storiesOf("DataTable", module).add("Using onSort", () => <App />);
