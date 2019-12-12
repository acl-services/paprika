import React from "react";
import { storiesOf } from "@storybook/react";
import moment from "moment";
import Button from "@paprika/button";
import DataTable, { RowHeight, Sort } from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";
import ColumnManaging from "../src/components/Navigation/components/ColumnManaging";

const mockData = fixtures(1);
function App() {
  const [columnVisibility, setColumnVisibility] = React.useState(true);

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setColumnVisibility(prev => !prev);
        }}
      >
        Toggle Country
      </Button>
      <DataTable width={1024} keygen="id" data={mockData} height={viewPortHeight()}>
        <DataTable.Navigation>
          <Sort />
          <RowHeight />
          <ColumnManaging />
        </DataTable.Navigation>
        <DataTable.ColumnDefinition
          id="country"
          width="190"
          header="Country"
          cell="country"
          isHidden={!columnVisibility}
        />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" canHide={false} />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" type={DataTable.ColumnTypes.NUMBER} />
        <DataTable.ColumnDefinition id="status" header="Status" cell="status" />
        <DataTable.ColumnDefinition
          id="joined"
          header="Joined since"
          type={DataTable.ColumnTypes.DATE}
          cell={row => moment(row.joined, "MM/DD/YYYY").format("MMMM DD, YYYY")}
          momentParsingFormat="MM/DD/YYYY"
        />
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Show hide columns", () => <App />);
