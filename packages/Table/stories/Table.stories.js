import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";

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

storiesOf(`${storyName}/Examples`, module)
  .add("Basic", () => (
    <Table data={data}>
      <Table.ColumnDefinition header="Name" cell="name" />
      <Table.ColumnDefinition header="LastName" cell="lastName" />
    </Table>
  ))
  .add("Has Zebra stripes", () => (
    <Table data={data} hasZebraStripes>
      <Table.ColumnDefinition header="Name" cell="name" />
      <Table.ColumnDefinition header="LastName" cell="lastName" />
    </Table>
  ));
