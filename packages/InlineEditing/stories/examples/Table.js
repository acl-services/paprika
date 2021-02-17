import React from "react";
import styled, { css } from "styled-components";
import Table, { Text } from "../../src";
import dataMock from "./mock";

export default function () {
  const [data] = React.useState(dataMock);
  return (
    <Table data={data} hasZebraStripes a11yText="My Table">
      <Table.ColumnDefinition
        header="author"
        width="180"
        onChange={props => {
          const { rowIndex = null, columnIndex = null, nextValue = null, nextData = null } = props;
          debugger;
        }}
        cell={props => <Text value={props.row.author} {...props} />}
      />
      <Table.ColumnDefinition header="title" width="180" cell={props => <Text value={props.row.book} {...props} />} />
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
