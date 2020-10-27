import React from "react";
import Table from "@paprika/table";
import DropdownMenu from "@paprika/dropdown-menu";
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
    <DropdownMenu>
      <DropdownMenu.Trigger buttonType="raw">
        <EllipsisVertical />
      </DropdownMenu.Trigger>
      <DropdownMenu.Item onClick={() => {}}>One</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Two</DropdownMenu.Item>
      <DropdownMenu.Item onClick={() => {}}>Three</DropdownMenu.Item>
    </DropdownMenu>
  );
}

export const Basic = () => {
  return (
    <Table data={data}>
      <Table.ColumnDefinition width="150px" header={() => <DataHeader label="name" />} cell="name" />
    </Table>
  );
};

export const WithRenderActions = () => {
  return (
    <Table data={data}>
      <Table.ColumnDefinition
        width="150px"
        header={() => <DataHeader label="name" renderActions={() => <Menu />} />}
        cell="name"
      />
    </Table>
  );
};

export const WithTypes = () => {
  return (
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
};

export const WithBackgroundColor = () => {
  return (
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
};
