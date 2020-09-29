import React from "react";
import Table from "@paprika/table";
import L10n from "@paprika/l10n";
import styled, { css } from "styled-components";

import DataField from "../src";

const SimpleContainer = styled.div(() => {
  return css`
    [data-pka-anchor="data-field.numeric"] {
      height: auto;
    }
  `;
});

const data = [
  { name: "Abbeline Doe", income: 153234.87, taxes: 32300.34 },
  { name: "Alivia Smith", income: 85720.92, taxes: 17300.43 },
  { name: "Aniya Johanson", income: 45328.54, taxes: 14302.23 },
];

export function Simple() {
  return (
    <SimpleContainer>
      <DataField.Numeric align={DataField.types.align.LEFT} currency="USD" value={1240} />
    </SimpleContainer>
  );
}

export function TableWithLocale() {
  return (
    <L10n locale="fr">
      <Table data={data}>
        <Table.ColumnDefinition header="Project" cell="name" />
        <Table.ColumnDefinition header="Income" cell={({ row }) => <DataField.Numeric value={row.income} />} />
        <Table.ColumnDefinition header="Taxes" cell={({ row }) => <DataField.Numeric value={row.taxes} />} />
        <Table.ColumnDefinition
          header="Revenue"
          cell={({ row }) => (
            <a href="http://wegalvanize.com">
              <DataField.Numeric value={Number(row.income - row.taxes)} />
            </a>
          )}
        />
      </Table>
    </L10n>
  );
}

export function TableWithLocaleAlignLeft() {
  return (
    <L10n locale="de">
      <Table data={data}>
        <Table.ColumnDefinition header="Project" cell="name" />
        <Table.ColumnDefinition
          header="Income"
          cell={({ row }) => <DataField.Numeric align={DataField.types.align.LEFT} value={row.income} />}
        />
        <Table.ColumnDefinition
          header="Taxes"
          cell={({ row }) => <DataField.Numeric align={DataField.types.align.LEFT} value={row.taxes} />}
        />
        <Table.ColumnDefinition
          header="Revenue"
          cell={({ row }) => (
            <a href="http://wegalvanize.com">
              <DataField.Numeric align={DataField.types.align.LEFT} value={Number(row.income - row.taxes)} />
            </a>
          )}
        />
      </Table>
    </L10n>
  );
}
