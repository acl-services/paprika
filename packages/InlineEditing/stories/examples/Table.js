import React from "react";
import styled, { css } from "styled-components";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import Table, { Text } from "../../src";
import dataMock from "./mock";

const TableInner = React.memo(() => {
  const [data, setData] = React.useState(dataMock);

  return (
    <Table data={data} hasZebraStripes a11yText="My Table">
      <Table.ColumnDefinition
        header="author"
        width="180"
        onChange={props => {
          const { rowIndex = null, nextValue = null, close, error } = props;

          // setData(prev => {
          //   const prevClone = prev.slice(0);
          //   prevClone[rowIndex].author = nextValue;

          //   return prevClone;
          // });

          error("has error");
          close();
        }}
        cell={props => <Text value={props.row.author} editIcon={<ArrowRight />} {...props} />}
      />
      <Table.ColumnDefinition
        header="title"
        width="140"
        cell={props => <Text value={props.row.book} editIcon={<ArrowRight />} {...props} />}
      />
      <Table.ColumnDefinition header="cover" cell={({ row }) => <img height={74} src={row.cover} alt="cover book" />} />
      <Table.ColumnDefinition
        header="tags"
        width="340"
        cell={({ row, rowIndex, columnIndex }) =>
          row.tags.map(tag => <Tag key={`${tag}${columnIndex}${rowIndex}`}>{tag}</Tag>)
        }
      />
      <Table.ColumnDefinition
        header="description"
        cell={props => (
          <span>
            {" "}
            - {props.status} -{props.row.description}
          </span>
        )}
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

const Tag = styled.span(() => {
  return css`
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #111;
    margin: 2px 2px;
    padding: 2px;
    white-space: nowrap;
  `;
});
