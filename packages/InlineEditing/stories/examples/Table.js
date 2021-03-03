import React from "react";
import ListBox from "../../src/ListBox";
import { Table } from "../../src";
import getUsers from "./mock";

const users = getUsers(10);
const cellTypes = ["name", "status", "role", "subscription", "reportsRole", "an", "activations", "signed"];

const cellRenders = {
  an: () => ({ row }) => {
    return <span>{row.an ? "No" : "Yes"}</span>;
  },
  subscription: ({ setData }) => props => {
    const subscriptionTypes = ["Professional", "Oversight", "Contributor", "Results Lite Contributor", "None"];
    return (
      <ListBox
        {...props}
        value={props.row.subscription}
        onChange={value => {
          console.log("onChange", value);
        }}
        onSubmit={(index, options, _, { rowIndex }) => {
          const nextValue = options[index].value;
          if (nextValue !== props.row.subscription) {
            setData(prevData => {
              const nextData = prevData.slice(0);
              nextData[rowIndex].subscription = nextValue;
              return nextData;
            });
          }
        }}
      >
        {subscriptionTypes.map(subscription => (
          <ListBox.Option value={subscription} isSelected={subscription === props.row.subscription} key={subscription}>
            {subscription}
          </ListBox.Option>
        ))}
      </ListBox>
    );
  },
};

const columnDefinitionProps = {
  subscription: { width: 140 },
};

export default function TableStory() {
  const [data, setData] = React.useState(users);

  return (
    <Table data={data} hasZebraStripes a11yText="My Table">
      {cellTypes.map(key => {
        const cell = key in cellRenders ? cellRenders[key]({ setData }) : ({ row }) => row[key];
        const extraProps = key in columnDefinitionProps ? columnDefinitionProps[key] : {};
        return <Table.ColumnDefinition key="key" header={key} cell={cell} {...extraProps} />;
      })}
    </Table>
  );
}
