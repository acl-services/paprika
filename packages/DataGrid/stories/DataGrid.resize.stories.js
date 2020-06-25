import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import ActionBar, { ColumnsArrangement, useColumnsArrangement } from "../../ActionBar/src";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const storyName = getStoryName("DataGrid");

const data = fixtures(10);

export function MultipleCanGrow() {
  return (
    <React.Fragment>
      <Sbook.Story>
        <Heading level={2}>
          Multiple <code>canGrow</code>
        </Heading>
        <DataGrid data={data} width={1000}>
          <DataGrid.ColumnDefinition header="Countries (grows)" cell="country" canGrow />
          <DataGrid.ColumnDefinition header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Goals (grows)" cell="goals" canGrow />
          <DataGrid.ColumnDefinition header="Goals" cell="goals" />
        </DataGrid>
      </Sbook.Story>
    </React.Fragment>
  );
}

export function CanGrowStressing() {
  return (
    <React.Fragment>
      <Sbook.Story>
        <Heading level={2}>
          Full width <code>canGrow</code>
        </Heading>
        <p>using canGrow prop when there is no available space to fill will do nothing</p>
        <DataGrid data={data}>
          <DataGrid.ColumnDefinition header="Countries (grows)" cell="country" canGrow />
          <DataGrid.ColumnDefinition header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Name" cell="name" />
          <DataGrid.ColumnDefinition header="Goals (grows)" cell="goals" canGrow />
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
        canGrow: true,
      },
      name: {
        cell: () => "Name",
        header: "Name",
        canGrow: false,
      },
      status: {
        cell: () => "Status",
        header: "Status",
        canGrow: false,
      },
      country: {
        cell: () => "Country",
        header: "Country",
        canGrow: false,
      },
      joined: {
        cell: () => "Joined",
        header: "Joined",
        canGrow: false,
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
            <ColumnsArrangement.ColumnDefinition id="goals" label="Goals" isHidden={isColumnHidden("goals")} />
            <ColumnsArrangement.ColumnDefinition id="name" label="Name" isHidden={isColumnHidden("name")} />
            <ColumnsArrangement.ColumnDefinition id="status" label="Status" isHidden={isColumnHidden("status")} />
            <ColumnsArrangement.ColumnDefinition id="country" label="Country" isHidden={isColumnHidden("country")} />
            <ColumnsArrangement.ColumnDefinition id="joined" label="Joined" isHidden={isColumnHidden("joined")} />
          </ColumnsArrangement>
        </ActionBar>
        <DataGrid key={orderedColumnIds.join("-")} data={data} width={1000}>
          {orderedColumnIds.map(
            columnKey =>
              !isColumnHidden(columnKey) && (
                <DataGrid.ColumnDefinition
                  cell={renderColumns(columnKey).cell}
                  header={renderColumns(columnKey).header}
                  canGrow={renderColumns(columnKey).canGrow}
                />
              )
          )}
        </DataGrid>
      </Sbook.Story>
    </React.Fragment>
  );
}

storiesOf(`${storyName}/Examples`, module).add("Resize", () => (
  <>
    <MultipleCanGrow />
    <CanGrowStressing />
    <AppWithActionBar />
  </>
));
