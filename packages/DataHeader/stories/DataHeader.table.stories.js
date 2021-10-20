import React from "react";
import Table from "@paprika/table";
import OverflowMenu from "@paprika/overflow-menu";
import EllipsisVertical from "@paprika/icon/lib/EllipsisVertical";

import { getStoryName } from "storybook/storyTree";
import DataHeader from "../src";

export default {
  title: getStoryName("DataHeader"),
};

const data = [
  { name: "Abbeline Doe", income: 153234.87, taxes: 32300.34 },
  { name: "Alivia Smith", income: 85720.92, taxes: 17300.43 },
  { name: "Aniya Johanson", income: 45328.54, taxes: 14302.23 },
];

function Menu(props) {
  const { type } = props;
  const handleClick = item => () => {
    console.log(`${type} / ${item}`);
  };

  return (
    <OverflowMenu>
      <OverflowMenu.Trigger buttonType="raw">
        <EllipsisVertical />
      </OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={handleClick("one")}>One</OverflowMenu.Item>
      <OverflowMenu.Item onClick={handleClick("two")}>Two</OverflowMenu.Item>
      <OverflowMenu.Item onClick={handleClick("three")}>Three</OverflowMenu.Item>
    </OverflowMenu>
  );
}

export const TableExample = () => (
  <div style={{ padding: "32px" }}>
    <Table data={data}>
      <Table.ColumnDefinition
        header={() => (
          <DataHeader backgroundColor="#F60" label="name" type="numeric" renderActions={() => <Menu type="some" />} />
        )}
        cell="name"
      />
      <Table.ColumnDefinition header="Income" cell={({ row }) => row.income} />
      <Table.ColumnDefinition header="Taxes" cell={({ row }) => row.taxes} />
      <Table.ColumnDefinition header="Revenue" cell={({ row }) => Number(row.income - row.taxes)} />
    </Table>
  </div>
);
