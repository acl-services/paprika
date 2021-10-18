import React from "react";
import ListBox from "../../src/ListBox";
import Table, { useTable } from "../../src/Table";
import getUsers from "./mock";

const users = getUsers(20);
const cellTypes = ["an", "name", "status", "role", "subscription", "reportsRole", "activations", "signed"];

const cellRenders = {
  an: () => ({ row }) => <input type="checkbox" defaultChecked={row.an} />,
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
        onSubmit={(index, options, _, { rowIndex, columnIndex }) => {
          const nextValue = options[index].value;
          if (nextValue !== props.row.subscription) {
            setOptimisticValue(nextValue);
            setStatus(statusType.LOADING);

            setTimeout(() => {
              setData(prevData => {
                const nextData = prevData.slice(0);
                // something went wrong, example
                setStatus(statusType.ERROR, {
                  messageError: `rowIndex:${rowIndex} columnIndex:${columnIndex} has an error`,
                });
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
};

const columnDefinitionProps = {
  subscription: { width: 140 },
};

export default function TableErrorStory() {
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
