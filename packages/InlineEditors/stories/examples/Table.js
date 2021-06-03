import React from "react";
import ListBox from "../../src/ListBox";
import Table, { useTable } from "../../src/Table";
import getUsers from "./mock";

const users = getUsers(20);
const cellTypes = ["an", "name", "status", "role", "subscription", "reportsRole", "activations", "signed"];

const cellRenders = {
  name: () => ({ row }) => {
    return (
      <div>
        <div>{row.name}</div>
        <div>
          <a href="https://wegalvanize.com" rel="noreferrer" target="_blank">
            Some link
          </a>
        </div>
      </div>
    );
  },
  an: () => ({ row }) => {
    return <input type="checkbox" defaultChecked={row.an} />;
  },
  subscription: ({ setData }) => props => {
    const { setStatus, setOptimisticValue, statusType } = useTable({
      rowIndex: props.rowIndex,
      columnIndex: props.columnIndex,
    });
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
            setOptimisticValue(nextValue);
            setStatus(statusType.LOADING);

            setTimeout(() => {
              setData(prevData => {
                const nextData = prevData.slice(0);
                nextData[rowIndex].subscription = nextValue;
                setStatus(statusType.SUCCEED);
                return nextData;
              });
            }, 1200);
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
  role: ({ setData }) => props => {
    const { setStatus, setOptimisticValue, statusType } = useTable({
      rowIndex: props.rowIndex,
      columnIndex: props.columnIndex,
    });
    const roleTypes = ["Admin", "User", "Super Admin", "Guest", "None"];

    return (
      <ListBox
        {...props}
        value={props.row.role}
        onChange={value => {
          console.log("onChange", value);
        }}
        onSubmit={(index, options, _, { rowIndex }) => {
          const nextValue = options[index].value;
          if (nextValue !== props.row.role) {
            setOptimisticValue(nextValue);
            setStatus(statusType.LOADING);

            setTimeout(() => {
              setData(prevData => {
                const nextData = prevData.slice(0);
                nextData[rowIndex].role = nextValue;
                setStatus(statusType.SUCCEED);
                return nextData;
              });
            }, 1200);
          }
        }}
      >
        {roleTypes.map(role => (
          <ListBox.Option value={role} isSelected={role === props.row.role} key={role}>
            {role}
          </ListBox.Option>
        ))}
      </ListBox>
    );
  },
};

const columnDefinitionProps = {
  subscription: { width: 140 },
  name: { width: 170 },
  role: { width: 110 },
};

export default function TableStory() {
  const [data, setData] = React.useState(users);

  return (
    <>
      <Table data={data} hasZebraStripes a11yText="My Table">
        {cellTypes.map(key => {
          const cell = key in cellRenders ? cellRenders[key]({ setData }) : ({ row }) => row[key];
          const extraProps = key in columnDefinitionProps ? columnDefinitionProps[key] : {};
          return <Table.ColumnDefinition key="key" header={key} cell={cell} {...extraProps} />;
        })}
      </Table>
    </>
  );
}
