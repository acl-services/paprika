import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Table, { TH } from "../src";

const storyName = getStoryName("Table");

storiesOf(storyName, module);

const data = [
  { name: "Charles ", lastName: "Babbage", iceCream: ["vanilla", "chocolate"] },
  { name: "Claude ", lastName: "Shannon", iceCream: ["lime"] },
  { name: "Alan ", lastName: "Turing", iceCream: ["strawberry"] },
  { name: "John  von", lastName: " Neumann", iceCream: ["blueberry"] },
  { name: "William", lastName: "Shockley", iceCream: ["Chocolate chip"] },
  { name: "Douglas", lastName: "Engelbart", iceCream: ["Neopolitan", "Coffee"] },
  { name: "Robert", lastName: "Noyce", iceCream: ["Green tea", "Grape"] },
  { name: "Steve", lastName: "Wozniak", iceCream: ["Mango"] },
  { name: "Grace Murray", lastName: "Hopper", iceCream: ["Raspberry Ripple"] },
  { name: "Vint", lastName: "Cerf", iceCream: ["Teaberry "] },
];

export const WithColSpan = () => {
  return (
    <Table a11yText="" data={data}>
      <Table.Headers>
        <tr>
          <TH colSpan="3">List of ice creams</TH>
        </tr>
      </Table.Headers>
      <Table.ColumnDefinition header="Name" colSpan="2" cell="name" />
      <Table.ColumnDefinition
        cell={({ row }) => {
          return `${row.lastName}`;
        }}
      />
      <Table.ColumnDefinition header="ice cream" cell="iceCream" />
    </Table>
  );
};

storiesOf(`${storyName}`, module).add("Table colSpan", () => <WithColSpan />);
