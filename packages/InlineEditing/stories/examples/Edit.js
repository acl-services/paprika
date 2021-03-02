import React from "react";
import ListBox from "../../src/ListBox";

import { Table } from "../../src";
import Input from "../../src/Input";
import Textarea from "../../src/Textarea";

import dataMock from "./mock";

const TableInner = React.memo(() => {
  const [data, setData] = React.useState(dataMock);

  return (
    <Table data={data} hasZebraStripes a11yText="My Table">
      <Table.ColumnDefinition
        header="author"
        width="180"
        cell={props => (
          <Input
            {...props}
            value={props.row.author}
            onChange={({ rowIndex, nextValue }) => {
              setData(prevData => {
                const nextData = prevData.slice(0);
                nextData[rowIndex].author = nextValue;
                return nextData;
              });
            }}
          />
        )}
      />
      <Table.ColumnDefinition
        header="book"
        width="240"
        cell={props => (
          <ListBox placeHolder="Select an item     ▾" onChange={() => {}} {...props}>
            {data.map(row => (
              <ListBox.Option key={row.id} value={row.book}>
                {row.book}
              </ListBox.Option>
            ))}
          </ListBox>
        )}
      />
      <Table.ColumnDefinition
        header="book"
        width="240"
        cell={props => <Textarea value={props.row.description} onChange={() => {}} {...props} />}
      />
    </Table>
  );
});

export default function () {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setIsVisible(prev => !prev);
    }, 2000);
  }, []);

  return (
    <>
      <span>{isVisible ? "😸" : "😢"}</span>
      <TableInner />
    </>
  );
}
