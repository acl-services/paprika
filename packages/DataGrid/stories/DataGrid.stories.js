import React from "react";
import { storiesOf } from "@storybook/react";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const data = fixtures(1);
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

function App() {
  return (
    <React.Fragment>
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition
          header={() => "country"}
          headerA11yText={() => "Countries"}
          cell={row => flags[row.country]}
          cellA11yText={row => row.country}
        />
        <DataGrid.ColumnDefinition header="Name" cell="name" />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
        <DataGrid.ColumnDefinition header="Status" cell="status" />
        <DataGrid.ColumnDefinition header="Status 2" cell="status" />
        <DataGrid.ColumnDefinition header="Status 3" cell="status" />
      </DataGrid>
    </React.Fragment>
  );
}

storiesOf("DataGrid", module).add("Showcase", () => <App />);
