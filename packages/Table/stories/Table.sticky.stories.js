import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Table from "../src";
import getUsers from "./mock";

const storyName = getStoryName("Table");
const users = getUsers(1000);
const cellTypes = [
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
  "subscription",
  "reportsRole",
  "activations",
  "signed",
];

const cellRenders = {
  name: () => ({ row }) => {
    return <div style={{ width: "400px" }}>{row.name}</div>;
  },
  an: () => ({ row }) => {
    return (
      <div style={{ width: "40px" }}>
        <input type="checkbox" defaultChecked={row.an} />
      </div>
    );
  },
};

const columnDefinitionProps = {
  name: { sticky: 57 },
  an: { sticky: 0 },
};

function TableStory() {
  const [data, setData] = React.useState(users);

  return (
    <Table data={data} hasZebraStripes a11yText="My Table">
      {cellTypes.map(key => {
        console.log("key:", key);
        const cell =
          key in cellRenders
            ? cellRenders[key]({ setData })
            : ({ row }) => <div style={{ width: "210px" }}>{row[key]}</div>;
        const extraProps = key in columnDefinitionProps ? columnDefinitionProps[key] : {};
        return <Table.ColumnDefinition key="key" header={key} cell={cell} {...extraProps} />;
      })}
    </Table>
  );
}

storiesOf(`${storyName}`, module).add("Sticky", () => <TableStory />);
