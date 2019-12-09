import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { Filters } from "../src";
import fixtures from "./fixtures";
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

  function handleFilter(filters) {
    console.log(filters);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setData([{ country: "Brazil", name: "Roberto Dinamite", goals: 512, status: "inactive", joined: "10/01/2019" }]);
    }, 1000);
  }

  return (
    <React.Fragment>
      <DataTable keygen="id" data={data} height={viewPortHeight()} isLoading={isLoading}>
        <DataTable.Navigation>
          <Filters onFilter={handleFilter} />
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

storiesOf("DataTable", module).add("Back-end filtering", () => <App />);
