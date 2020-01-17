import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const data = fixtures(10);
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
      <Sbook.Story>
        <DataGrid data={data} width={420}>
          <DataGrid.ColumnDefinition
            width={80}
            header="Countries"
            cell={row => flags[row.country]}
            cellA11yText={row => row.country}
            isSticky
          />
          <DataGrid.ColumnDefinition width={180} isSticky header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Goals" cell="goals" />
          <DataGrid.ColumnDefinition
            header="Link"
            cellA11yText={row => row.link}
            cell={row => (
              <Button.Link href={row.link} kind="link" size="small">
                {row.link}
              </Button.Link>
            )}
            width={180}
          />
          <DataGrid.ColumnDefinition header="Status" cell="status" />
          <DataGrid.ColumnDefinition header="Status 2" cell="status" />
          <DataGrid.ColumnDefinition header="Status 3" cell="status" />
          <DataGrid.ColumnDefinition width={210} header="Description" cell="description" />
        </DataGrid>
      </Sbook.Story>
    </React.Fragment>
  );
}

storiesOf("DataGrid", module).add("Sticky columns", () => <App />);
