import React from "react";
import Table from "@paprika/table";
import DataGrid from "@paprika/data-grid";
import Popover from "@paprika/popover";
import L10n from "@paprika/l10n";
import InfoCircle from "@paprika/icon/lib/InfoCircle";
import tokens from "@paprika/tokens";

import { getStoryName } from "storybook/storyTree";
import FieldTypes from "../src";

export default {
  title: getStoryName("FieldTypes"),
};

const data = [
  { name: "Abbeline Doe", income: 153234.87, taxes: 32300.34 },
  { name: "Alivia Smith", income: 85720.92, taxes: 17300.43 },
  { name: "Aniya Johanson", income: 45328.54, taxes: 14302.23 },
];

export const Numeric = () => {
  return (
    <div style={{ padding: "32px" }}>
      <h2>Table</h2>
      <h3>US locale</h3>
      <Table data={data}>
        <Table.ColumnDefinition header="Project" cell="name" />
        <Table.ColumnDefinition header="Income" cell={({ row }) => <FieldTypes.Numeric cell={row.income} />} />
        <Table.ColumnDefinition header="Taxes" cell={({ row }) => <FieldTypes.Numeric cell={row.taxes} />} />
        <Table.ColumnDefinition
          header="Revenue"
          cell={({ row }) => (
            <a href="http://wegalvanize.com">
              <FieldTypes.Numeric cell={Number(row.income - row.taxes)} />
            </a>
          )}
        />
      </Table>
      <h2>DataGrid</h2>
      <L10n locale="fr">
        <h3>French locale</h3>
        <DataGrid data={data}>
          <DataGrid.ColumnDefinition header="Project" cell="name" />
          <DataGrid.ColumnDefinition header="Income" cell={({ row }) => <FieldTypes.Numeric cell={row.income} />} />
          <DataGrid.ColumnDefinition header="Taxes" cell={({ row }) => <FieldTypes.Numeric cell={row.taxes} />} />
          <DataGrid.ColumnDefinition
            header="Revenue"
            cell={({ row }) => <FieldTypes.Numeric cell={Number(row.income - row.taxes)} />}
          />
        </DataGrid>
      </L10n>
      <L10n locale="de">
        <h3>German locale</h3>
        <DataGrid data={data}>
          <DataGrid.ColumnDefinition header="Project" cell="name" />
          <DataGrid.ColumnDefinition header="Income" cell={({ row }) => <FieldTypes.Numeric cell={row.income} />} />
          <DataGrid.ColumnDefinition header="Taxes" cell={({ row }) => <FieldTypes.Numeric cell={row.taxes} />} />
          <DataGrid.ColumnDefinition
            header="Revenue"
            cell={({ row }) => (
              <FieldTypes.Container align="right">
                <FieldTypes.Numeric color={tokens.textColor.link} cell={Number(row.income - row.taxes)} />
                <Popover isEager>
                  <Popover.Tip />
                  <Popover.Trigger style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ display: "inline-block" }}>
                      <InfoCircle />
                    </span>
                  </Popover.Trigger>
                  <Popover.Content>
                    <Popover.Card>Example info text</Popover.Card>
                  </Popover.Content>
                </Popover>
              </FieldTypes.Container>
            )}
          />
        </DataGrid>
      </L10n>
    </div>
  );
};
