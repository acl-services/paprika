import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import styled from "styled-components";

import Table from "../src";

const storyName = getStoryName("Table");

storiesOf(storyName, module);

const data = [
  { name: "Charles ", lastName: "Babbage" },
  { name: "Claude ", lastName: "Shannon" },
  { name: "Alan ", lastName: "Turing" },
  { name: "John  von", lastName: " Neumann" },
  { name: "William", lastName: "Shockley" },
  { name: "Douglas", lastName: "Engelbart" },
  { name: "Robert", lastName: "Noyce" },
  { name: "Steve", lastName: "Wozniak" },
  { name: "Grace Murray", lastName: "Hopper" },
  { name: "Vint", lastName: "Cerf" },
];

function Basic() {
  return (
    <Table a11yText="" data={data}>
      <Table.ColumnDefinition header="Name" cell="name" />
      <Table.ColumnDefinition header="LastName" cell="lastName" />
    </Table>
  );
}

const bordersStyles = {
  Container: styled.div`
    display: flex;
  `,
  Gap: styled.div`
    padding: 8px;
  `,
};

export function Borders() {
  return (
    <bordersStyles.Container>
      <bordersStyles.Gap>
        <h4>Default value</h4>
        <Table a11yText="" data={data}>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
      <bordersStyles.Gap>
        <h4>Vertical</h4>
        <Table a11yText="" data={data} borderType={Table.types.border.VERTICAL}>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
      <bordersStyles.Gap>
        <h4>Grid</h4>
        <Table a11yText="" data={data} borderType={Table.types.border.GRID}>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
      <bordersStyles.Gap>
        <h4>None</h4>
        <Table a11yText="" data={data} borderType={Table.types.border.NONE}>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
    </bordersStyles.Container>
  );
}

export function WithZebras() {
  return (
    <bordersStyles.Container>
      <bordersStyles.Gap>
        <h4>Default value</h4>
        <Table a11yText="" data={data} hasZebraStripes>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
      <bordersStyles.Gap>
        <h4>Vertical</h4>
        <Table a11yText="" data={data} hasZebraStripes borderType={Table.types.border.VERTICAL}>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
      <bordersStyles.Gap>
        <h4>Grid</h4>
        <Table a11yText="" data={data} hasZebraStripes borderType={Table.types.border.GRID}>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
      <bordersStyles.Gap>
        <h4>None</h4>
        <Table a11yText="" data={data} hasZebraStripes borderType={Table.types.border.NONE}>
          <Table.ColumnDefinition header="Name" cell="name" />
          <Table.ColumnDefinition header="LastName" cell="lastName" />
        </Table>
      </bordersStyles.Gap>
    </bordersStyles.Container>
  );
}

storiesOf(`${storyName}`, module)
  .add("Basic", () => <Basic />)
  .add("Has Zebra stripes", () => <WithZebras />)
  .add("Border types", () => <Borders />);
