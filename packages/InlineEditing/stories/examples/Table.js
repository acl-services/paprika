import React from "react";
import styled, { css } from "styled-components";
import Table from "../../src/components/Table/Table";
import dataMock from "./mock";

export default function() {
  const [data] = React.useState(dataMock);
  return (
    <Table data={data} hasZebraStripes>
      <Table.ColumnDefinition
        header="author"
        width="180"
        cell={props => (
          <>
            {props.row.author} {props.status}
          </>
        )}
      />
      <Table.ColumnDefinition header="title" width="180" cell={props => props.row.book} />
      <Table.ColumnDefinition header="cover" cell={({ row }) => <img height={74} src={row.cover} alt="cover book" />} />
      <Table.ColumnDefinition header="tags" width="340" cell={({ row }) => row.tags.map(tag => <Tag>{tag}</Tag>)} />
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
    display: inline-block;
    margin: 2px 2px;
    padding: 2px;
  `;
});
