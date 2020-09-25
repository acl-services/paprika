import React from "react";
import Table from "@paprika/table";
import L10n from "@paprika/l10n";
import styled, { css } from "styled-components";

import FieldTypes from "../src";

const SimpleContainer = styled.div(() => {
  return css`
    [data-pka-anchor="data-fields-numeric"] {
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
      <FieldTypes.Numeric align={FieldTypes.types.align.LEFT} currency="USD" number={1240} />
    </SimpleContainer>
  );
}

export function TableWithLocale() {
  return (
    <L10n locale="fr">
      <Table data={data}>
        <Table.ColumnDefinition header="Project" cell="name" />
        <Table.ColumnDefinition header="Income" cell={({ row }) => <FieldTypes.Numeric number={row.income} />} />
        <Table.ColumnDefinition header="Taxes" cell={({ row }) => <FieldTypes.Numeric number={row.taxes} />} />
        <Table.ColumnDefinition
          header="Revenue"
          cell={({ row }) => (
            <a href="http://wegalvanize.com">
              <FieldTypes.Numeric number={Number(row.income - row.taxes)} />
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
          cell={({ row }) => <FieldTypes.Numeric align={FieldTypes.types.align.LEFT} number={row.income} />}
        />
        <Table.ColumnDefinition
          header="Taxes"
          cell={({ row }) => <FieldTypes.Numeric align={FieldTypes.types.align.LEFT} number={row.taxes} />}
        />
        <Table.ColumnDefinition
          header="Revenue"
          cell={({ row }) => (
            <a href="http://wegalvanize.com">
              <FieldTypes.Numeric align={FieldTypes.types.align.LEFT} number={Number(row.income - row.taxes)} />
            </a>
          )}
        />
      </Table>
    </L10n>
  );
}
