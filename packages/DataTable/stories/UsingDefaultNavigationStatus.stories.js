import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable, { Filters, Sort, ColumnManaging } from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const mockData = fixtures(1);

const defaultFilters = [{ id: "a", columnId: "goals", rule: "LESS_THAN", value: "600" }];

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData(mockData);
    }, 1000);
  }, []);

  function handleFilter(filters, operator, columns) {
    console.log(filters, operator, columns);
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
          <Filters onFilter={handleFilter} defaultFilters={defaultFilters} defaultLogicalFilterOperator="OR" />
          <Sort defaultSortColumn="goals" defaultSortDirection="DESCEND" />
          <ColumnManaging defaultColumnsOrder={["goals", "name", "status", "country"]} />
        </DataTable.Navigation>
        <DataTable.ColumnDefinition id="country" width="190" header="Country" cell="country" defaultIsHidden />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Using default navigation status", () => <App />);
