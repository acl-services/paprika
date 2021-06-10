import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";

import Table from "../src";

const storyName = getStoryName("Table");

storiesOf(storyName, module);

const data = [
  { roleType: "Administrator" },
  {
    role: "user 1",
    email: "1@1.com",
    date: "Thu, October 1, 2020",
    time: "7:13:42, Pacific DayLight time",
  },
  {
    role: "user 1",
    email: "1@1.com",
    date: "Thu, October 1, 2020",
    time: "7:13:42, Pacific DayLight time",
  },
  { roleType: "Reader" },
  {
    role: "user 1",
    email: "1@1.com",
    date: "Thu, October 1, 2020",
    time: "7:13:42, Pacific DayLight time",
  },
];

const Group = props => {
  const { children, row, columnType } = props;

  if ("roleType" in row && columnType === "role") {
    return (
      <>
        <div style={{ position: "relative", left: "-36px" }}>
          <input type="checkbox" />
          <span style={{ display: "inline-block", position: "relative", left: "16px" }}>{row.roleType}</span>
        </div>
      </>
    );
  }

  if ("roleType" in row) {
    return "";
  }

  if (!("roleType" in row) && columnType === "checkbox") {
    return "";
  }

  return children(props);
};

export function WithUsers() {
  function handleCellProps({ row }) {
    if ("roleType" in row) {
      return { style: { background: "#F6F6F6" } };
    }
  }

  return (
    <Table data={data} forceTableWidthWithScrollBars>
      <Table.ColumnDefinition
        header={() => <input type="checkbox" />}
        cell={props => (
          <Group columnType="checkbox" {...props}>
            {() => <input type="checkbox" />}
          </Group>
        )}
        cellProps={handleCellProps}
      />
      <Table.ColumnDefinition
        header="Role"
        cell={props => (
          <Group columnType="role" {...props}>
            {props => (
              <>
                <input type="checkbox" />
                <span>{props.row.role}</span>
              </>
            )}
          </Group>
        )}
        cellProps={handleCellProps}
      />
      <Table.ColumnDefinition
        header="Email or group members"
        cell={props => <Group {...props}>{props => <span>{props.row.email}</span>}</Group>}
        cellProps={handleCellProps}
      />
      <Table.ColumnDefinition
        header="Previous sign-in data"
        cell={props => <Group {...props}>{props => <span>{props.row.date}</span>}</Group>}
        cellProps={handleCellProps}
      />
      <Table.ColumnDefinition
        header="Previous sing-in time"
        cell={props => <Group {...props}>{props => <span>{props.row.time}</span>}</Group>}
        cellProps={handleCellProps}
      />
      <Table.ColumnDefinition
        header=""
        cell={props => <Group {...props}>{props => ("roleType" in props.row ? null : <span>x</span>)}</Group>}
        cellProps={handleCellProps}
      />
    </Table>
  );
}

storiesOf(`${storyName}`, module).add("WithUsers", () => <WithUsers />);
