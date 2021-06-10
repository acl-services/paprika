import React from "react";
import DataGrid from "@paprika/data-grid";
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

export const DataGridWithLongTitleExample = () => {
  return (
    <div style={{ padding: "32px" }}>
      <DataGrid data={data} width={600}>
        <DataGrid.ColumnDefinition
          header={() => (
            <DataHeader
              title="Name"
              icons={DataHeader.icons}
              label="name"
              type="numeric"
              renderActions={() => <Menu type="some" />}
            />
          )}
          cell="name"
        />
        <DataGrid.ColumnDefinition
          header={() => (
            <DataHeader
              title="Revenue with some background info"
              icons={DataHeader.icons}
              label="Revenue with some background info"
              type="numeric"
              renderActions={() => <Menu type="some" />}
            />
          )}
          cell={({ row }) => Number(row.income - row.taxes)}
          width={100}
        />
        <DataGrid.ColumnDefinition
          header={() => (
            <DataHeader
              title="Income"
              icons={DataHeader.icons}
              label="Income"
              type="numeric"
              renderActions={() => <Menu type="some" />}
            />
          )}
          cell={({ row }) => row.income}
        />
        <DataGrid.ColumnDefinition
          header={() => (
            <DataHeader
              title="Taxes"
              icons={DataHeader.icons}
              label="Taxes"
              type="numeric"
              renderActions={() => <Menu type="some" />}
            />
          )}
          cell={({ row }) => row.taxes}
        />
      </DataGrid>
    </div>
  );
};
