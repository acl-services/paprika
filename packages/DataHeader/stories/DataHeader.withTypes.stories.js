import React from "react";
import Table from "@paprika/table";
import CaretUp from "@paprika/icon/lib/CaretUp";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import DataHeader from "../src";

export default {
  title: `${getStoryName("DataHeader")} / types`,
};

const data = [
  { name: "Abbeline Doe", income: 153234.87, taxes: 32300.34 },
  { name: "Alivia Smith", income: 85720.92, taxes: 17300.43 },
  { name: "Aniya Johanson", income: 45328.54, taxes: 14302.23 },
];

export const Numeric = () => {
  return (
    <Story>
      <Table data={data}>
        <Table.ColumnDefinition
          header={() => <DataHeader icons={DataHeader.icons} label="name" type={DataHeader.types.type.NUMERIC} />}
          cell="name"
        />
        <Table.ColumnDefinition header="Income" cell={({ row }) => row.income} />
        <Table.ColumnDefinition header="Taxes" cell={({ row }) => row.taxes} />
        <Table.ColumnDefinition header="Revenue" cell={({ row }) => Number(row.income - row.taxes)} />
      </Table>
    </Story>
  );
};

const icons = {
  ...DataHeader.icons,
  [DataHeader.types.type.DATE_TIME]: <CaretUp />,
};

export const Types = () => {
  return (
    <Story>
      <h3>TEXT</h3>
      <DataHeader icons={DataHeader.icons} label="name" type={DataHeader.types.type.TEXT} />
      <h3>DATE</h3>
      <DataHeader icons={DataHeader.icons} label="name" type={DataHeader.types.type.DATE} />
      <h3>DATE TIME</h3>
      <DataHeader icons={DataHeader.icons} label="name" type={DataHeader.types.type.DATE_TIME} />
      <h3>TIME</h3>
      <DataHeader icons={DataHeader.icons} label="name" type={DataHeader.types.type.TIME} />
      <h3>CUSTOM</h3>
      <DataHeader icons={icons} label="name" type={DataHeader.types.type.DATE_TIME} />
    </Story>
  );
};
