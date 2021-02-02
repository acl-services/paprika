import React from "react";
import styled, { css } from "styled-components";
import Input from "@paprika/input";
import { Table } from "../../src";
import dataMock from "./mock";

function Text({ value, onChange, finish, cancel }) {
  const refInput = React.useRef(null);
  const [inputValue, setInputValue] = React.useState(value);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onChange({ nextValue: refInput.current.value, finish, cancel });
    }
  }

  function handleBlur() {
    cancel();
  }

  function handleChange(event) {
    event.stopPropagation();
    setInputValue(event.target.value);
  }

  React.useEffect(() => {
    refInput.current.focus();
  }, []);

  return (
    <Input ref={refInput} onBlur={handleBlur} onKeyDown={handleKeyDown} onChange={handleChange} value={inputValue} />
  );
}

export default function () {
  const [data, setData] = React.useState(dataMock);

  return (
    <Table data={data} hasZebraStripes>
      <Table.ColumnDefinition
        header="identifier"
        width="40"
        cell={({ row }) => row.id}
        getValue={({ row }) => row.id}
        onEditing={Text}
        onChange={({ row, rowIndex, columnIndex, nextData, nextValue, update, finish }) => {
          debugger;
        }}
        type="text"
      />
      <Table.ColumnDefinition header="author" width="180" cell={({ row }) => row.author} />
      <Table.ColumnDefinition header="title" width="180" cell={({ row }) => row.book} />
      <Table.ColumnDefinition header="cover" cell={({ row }) => <img height={74} src={row.cover} alt="cover book" />} />
      <Table.ColumnDefinition header="tags" width="340" cell={({ row }) => row.tags.map(tag => <Tag>{tag}</Tag>)} />
      <Table.ColumnDefinition header="description" cell={({ row }) => <TextEllipsis>{row.description}</TextEllipsis>} />
    </Table>
  );
}

const TextEllipsis = styled.div(() => {
  return css`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden; /* number of lines to show */
    text-overflow: ellipsis;
  `;
});

const Tag = styled.span(() => {
  return css`
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    xcolor: #111;
    display: inline-block;
    margin: 2px 2px;
    padding: 2px;
  `;
});
