import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Table from "../src";
import getUsers from "./mock";

const storyName = getStoryName("Table");
const users = getUsers(100);
const cellTypes = [
  "index",
  "an",
  "name",
  "status",
  "role",
  "subscription",
  "reportsRole",
  "activations",
  "signed",
  "status",
  "role",
];

const cellRenders = {
  index: () => ({ rowIndex }) => <div style={{ width: "40px" }}>{rowIndex}</div>,
  name: () => ({ row }) => <div style={{ width: "400px" }}>{row.name}</div>,
  an: () => ({ row }) => (
    <div style={{ width: "40px" }}>
      <input type="checkbox" defaultChecked={row.an} />
    </div>
  ),
};

const columnDefinitionProps = {
  an: { sticky: 0 },
  name: { sticky: 57 },
};

function TableStory() {
  const [data, setData] = React.useState(users);

  function handleAdd100More() {
    setData(prev => {
      const next100 = prev.slice(0, 99);
      return prev.concat(next100);
    });
  }

  return (
    <>
      <div style={{ width: "1024px", height: "720px", overflow: "auto" }}>
        <Table data={data} hasZebraStripes a11yText="My Table">
          {cellTypes.map(key => {
            const cell =
              key in cellRenders
                ? cellRenders[key]({ setData })
                : ({ row }) => <div style={{ width: "210px" }}>{row[key]}</div>;

            const extraProps = key in columnDefinitionProps ? columnDefinitionProps[key] : {};
            return <Table.ColumnDefinition key="key" header={key} cell={cell} {...extraProps} />;
          })}
        </Table>
      </div>
      <button type="button" onClick={handleAdd100More}>
        Add 100+
      </button>
    </>
  );
}

storiesOf(`${storyName}`, module).add("Sticky", () => <TableStory />);
