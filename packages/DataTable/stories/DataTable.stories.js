import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "../src";
import fixtures from "./fixtures";

const flags = {
  Mexico: "🇲🇽",
};

function getFlag(flag) {
  if (flag in flags) {
    return flags[flag];
  }

  return flag;
}

const data = fixtures(1000);
function App() {
  function renderCountryCell(flag) {
    return <span dangerouslySetInnerHTML={{ __html: getFlag(flag) }} />;
  }

  return (
    <Table data={data} height={window.innerHeight - 30}>
      <Table.ColumnDefinition type={Table.types.string} renderCell={renderCountryCell}>
        Country
      </Table.ColumnDefinition>
      <Table.ColumnDefinition type={Table.types.string}>Name</Table.ColumnDefinition>
      <Table.ColumnDefinition type={Table.types.number}>Score</Table.ColumnDefinition>
      <Table.ColumnDefinition type={Table.types.string}>Status</Table.ColumnDefinition>
    </Table>
  );
}

storiesOf("DataTable", module).add("Showcase", () => <App />);
