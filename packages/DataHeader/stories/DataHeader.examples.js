import React from "react";
import Table from "@paprika/table";
import OverflowMenu from "@paprika/overflow-menu";
// You should import this icon from WASABICONS if you are using it on the highbond ecosystem.
import EllipsisVertical from "@paprika/icon/lib/EllipsisVertical";
import DataHeader from "../src";

const data = [
  { name: "Abbeline Doe", income: 153234.87, taxes: 32300.34 },
  { name: "Alivia Smith", income: 85720.92, taxes: 17300.43 },
  { name: "Aniya Johanson", income: 45328.54, taxes: 14302.23 },
];

function Menu() {
  return (
    <OverflowMenu>
      <OverflowMenu.Trigger buttonType="raw">
        <EllipsisVertical />
      </OverflowMenu.Trigger>
      <OverflowMenu.Item onClick={() => {}}>One</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Two</OverflowMenu.Item>
      <OverflowMenu.Item onClick={() => {}}>Three</OverflowMenu.Item>
    </OverflowMenu>
  );
}

export const Basic = () => (
    <Table data={data}>
      <Table.ColumnDefinition width="150px" header={() => <DataHeader label="name" />} cell="name" />
    </Table>
  );

export const WithRenderActions = () => (
    <Table data={data}>
      <Table.ColumnDefinition
        width="150px"
        header={() => <DataHeader label="name" renderActions={() => <Menu />} />}
        cell="name"
      />
    </Table>
  );

export const WithTypes = () => (
    <Table data={data}>
      <Table.ColumnDefinition
        header={() => <DataHeader label="Value" type={DataHeader.types.type.TEXT} icons={DataHeader.icons} />}
        cell="name"
      />
      <Table.ColumnDefinition
        header={() => <DataHeader label="Value" type={DataHeader.types.type.NUMERIC} icons={DataHeader.icons} />}
        cell="name"
      />
      <Table.ColumnDefinition
        header={() => <DataHeader label="Value" type={DataHeader.types.type.DATA} icons={DataHeader.icons} />}
        cell="income"
      />
      <Table.ColumnDefinition
        header={() => <DataHeader label="Value" type={DataHeader.types.type.TIME} icons={DataHeader.icons} />}
        cell="taxes"
      />
      <Table.ColumnDefinition
        header={() => <DataHeader label="Value" type={DataHeader.types.type.DATE_TIME} icons={DataHeader.icons} />}
        cell="income"
      />
    </Table>
  );

export const WithBackgroundColor = () => (
    <Table data={data}>
      <Table.ColumnDefinition
        header={() => <DataHeader backgroundColor="magenta" color="white" label="name" />}
        cell="name"
      />
      <Table.ColumnDefinition
        header={() => <DataHeader backgroundColor="cyan" label="Income" />}
        cell={({ row }) => row.income}
      />
      <Table.ColumnDefinition
        header={() => <DataHeader backgroundColor="black" color="white" label="Value" />}
        cell={({ row }) => row.taxes}
      />
    </Table>
  );
