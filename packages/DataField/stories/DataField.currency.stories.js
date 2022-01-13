import React from "react";
import Table from "@paprika/table";
import DataGrid from "@paprika/data-grid";
import L10n from "@paprika/l10n";

import { getStoryName } from "storybook/storyTree";

import DataField from "../src";

export default {
  title: getStoryName("DataField"),
};

const data = [
  { name: "Abbeline Doe", income: 153234.0, taxes: 32300.0 },
  { name: "Alivia Smith", income: 85720.92, taxes: 17300.43 },
  { name: "Aniya Johanson", income: 45328.54, taxes: 14302.23 },
];

export const Currency = () => (
  <div style={{ padding: "32px" }}>
    <h2>Table</h2>
    <h3>US locale</h3>
    <Table data={data}>
      <Table.ColumnDefinition header="Project" cell="name" />
      <Table.ColumnDefinition
        header="Income"
        cell={({ row }) => <DataField.Numeric currency="USD" value={row.income} />}
      />
      <Table.ColumnDefinition
        header="Taxes"
        cell={({ row }) => <DataField.Numeric currency="USD" value={row.taxes} />}
      />
      <Table.ColumnDefinition
        header="Revenue"
        cell={({ row }) => <DataField.Numeric currency="USD" value={Number(row.income - row.taxes)} />}
      />
    </Table>
    <h2>DataGrid</h2>
    <L10n locale="ja">
      <h3>Japanese locale</h3>
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition header="Project" cell="name" />
        <DataGrid.ColumnDefinition
          header="Income"
          cell={({ row }) => <DataField.Numeric currency="JPY" value={row.income} />}
        />
        <DataGrid.ColumnDefinition
          header="Taxes"
          cell={({ row }) => <DataField.Numeric currency="JPY" value={row.taxes} />}
        />
        <DataGrid.ColumnDefinition
          header="Revenue"
          cell={({ row }) => (
            <>
              <DataField.Numeric currency="JPY" value={Number(row.income - row.taxes)} />
            </>
          )}
        />
      </DataGrid>
    </L10n>
    <L10n locale="de">
      <h3>German locale</h3>
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition header="Project" cell="name" />
        <DataGrid.ColumnDefinition
          header="Income"
          cell={({ row }) => <DataField.Numeric currency="EUR" value={row.income} />}
        />
        <DataGrid.ColumnDefinition
          header="Taxes"
          cell={({ row }) => <DataField.Numeric currency="EUR" value={row.taxes} />}
        />
        <DataGrid.ColumnDefinition
          header="Revenue"
          cell={({ row }) => <DataField.Numeric currency="EUR" value={Number(row.income - row.taxes)} />}
        />
      </DataGrid>
    </L10n>
  </div>
);
