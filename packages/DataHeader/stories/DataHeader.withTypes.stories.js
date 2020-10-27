import React from "react";
import Table from "@paprika/table";
import CaretUp from "@paprika/icon/lib/CaretUp";
// You should import this icon from WASABICONS if you are using it on the highbond ecosystem.
import EllipsisVertical from "@paprika/icon/lib/EllipsisVertical";

import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import DropdownMenu from "@paprika/dropdown-menu";
import DataHeader from "../src";

export default {
  title: `${getStoryName("DataHeader")} / types`,
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
    <DropdownMenu>
      <DropdownMenu.Trigger buttonType="raw">
        <EllipsisVertical />
      </DropdownMenu.Trigger>
      <DropdownMenu.Item onClick={handleClick("one")}>One</DropdownMenu.Item>
      <DropdownMenu.Item onClick={handleClick("two")}>Two</DropdownMenu.Item>
      <DropdownMenu.Item onClick={handleClick("three")}>Three</DropdownMenu.Item>
    </DropdownMenu>
  );
}

export const Numeric = () => {
  return (
    <Story>
      <Table data={data}>
        <Table.ColumnDefinition
          width="150px"
          header={() => (
            <DataHeader
              icons={DataHeader.icons}
              label="name"
              type={DataHeader.types.type.TEXT}
              renderActions={() => <Menu type="name" />}
            />
          )}
          cell="name"
        />
        <Table.ColumnDefinition
          header={() => <DataHeader icons={DataHeader.icons} label="Income" type={DataHeader.types.type.NUMERIC} />}
          cell={({ row }) => row.income}
        />
        <Table.ColumnDefinition
          header={() => <DataHeader icons={DataHeader.icons} label="Value" type={DataHeader.types.type.DATE} />}
          cell={({ row }) => row.taxes}
        />
        <Table.ColumnDefinition
          header={() => <DataHeader icons={DataHeader.icons} label="Value" type={DataHeader.types.type.TIME} />}
          cell={({ row }) => row.taxes}
        />
        <Table.ColumnDefinition
          header={() => <DataHeader icons={DataHeader.icons} label="Value" type={DataHeader.types.type.DATE_TIME} />}
          cell={({ row }) => row.taxes}
        />
      </Table>
    </Story>
  );
};

const icons = {
  ...DataHeader.icons,
  [DataHeader.types.type.DATE_TIME]: <CaretUp />,
};

export const TypesExample = () => {
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
