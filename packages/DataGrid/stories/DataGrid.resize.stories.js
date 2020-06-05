import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArrangement } from "../../ActionBar/src";

import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const data = fixtures(10);

export function App() {
  return (
    <React.Fragment>
      <Sbook.Story>
        <Heading level={2}>
          Multiple <code>isGrow</code>
        </Heading>
        <DataGrid data={data} width={1000}>
          <DataGrid.ColumnDefinition header="Countries (grows)" cell="country" isGrow />
          <DataGrid.ColumnDefinition header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Goals (grows)" cell="goals" isGrow />
          <DataGrid.ColumnDefinition header="Goals" cell="goals" />
        </DataGrid>
      </Sbook.Story>
    </React.Fragment>
  );
}

function AppWithActionBar() {
  const { orderedColumnIds, isColumnHidden, ...handlers } = useColumnsArrangement([
    "goals",
    "name",
    "status",
    "country",
    "joined",
  ]);

  const renderColumns = type => {
    const column = {
      goals: {
        cell: () => "Goals",
        header: "Goals (grows)",
        isGrow: true,
      },
      name: {
        cell: () => "Name",
        header: "Name",
        isGrow: false,
      },
      status: {
        cell: () => "Status",
        header: "Status",
        isGrow: false,
      },
      country: {
        cell: () => "Country",
        header: "Country",
        isGrow: false,
      },
      joined: {
        cell: () => "Joined",
        header: "Joined",
        isGrow: false,
      },
    };

    return column[type];
  };

  return (
    <React.Fragment>
      <Sbook.Story>
        <Heading level={2}>DataGrid with ActionBar</Heading>
        <ActionBar>
          <ColumnsArrangement orderedColumnIds={orderedColumnIds} {...handlers}>
            <ColumnsArrangement.ColumnDefinition
              id="goals"
              label="Goals"
              isDisabled={false}
              isHidden={isColumnHidden("goals")}
            />
            <ColumnsArrangement.ColumnDefinition
              id="name"
              label="Name"
              isDisabled={false}
              isHidden={isColumnHidden("name")}
            />
            <ColumnsArrangement.ColumnDefinition
              id="status"
              label="Status"
              isDisabled={false}
              isHidden={isColumnHidden("status")}
            />
            <ColumnsArrangement.ColumnDefinition
              id="country"
              label="Country"
              isDisabled={false}
              isHidden={isColumnHidden("country")}
            />
            <ColumnsArrangement.ColumnDefinition
              id="joined"
              label="Joined"
              isDisabled={false}
              isHidden={isColumnHidden("joined")}
            />
          </ColumnsArrangement>
        </ActionBar>
        <DataGrid data={data} width={1000}>
          {orderedColumnIds.map(columnKey =>
            isColumnHidden(columnKey) ? null : (
              <DataGrid.ColumnDefinition
                cell={renderColumns(columnKey).cell}
                header={renderColumns(columnKey).header}
                isGrow={renderColumns(columnKey).isGrow}
              />
            )
          )}
        </DataGrid>
      </Sbook.Story>
    </React.Fragment>
  );
}

storiesOf("DataGrid / resize", module).add("Resize", () => (
  <>
    <App />
    <AppWithActionBar />
  </>
));
