import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import styled from "styled-components";

import Button from "@paprika/button";
import Pill from "@paprika/pill";
import DropdownMenu from "@paprika/dropdown-menu";

import Table from "../src";

const storyName = getStoryName("Table");

storiesOf(storyName, module);

const data = [
  {
    label: "Questionnaire tablet that is very long",
    type: "questionnaire",
    description: "",
    tag: "47,9000",
    interpretations: 15,
    triggers: 15,
    metrics: 15,
  },
  {
    label: "DataTable title 1",
    type: "dataTable",
    data: [{}, {}],
    description: `This is a description that is part of the collection. 
                  It only needs to show this much stuff in this area, it can go on u…`,
    tag: "47,9000",
    interpretations: 15,
    triggers: 15,
    metrics: 15,
  },
  {
    label: "Completely empty table",
    type: "dataTable",
    description: "",
    data: [],
    interpretations: 15,
    triggers: 15,
    metrics: 15,
  },
  {
    label: "Another data analytic but has the script name",
    type: "dataTable",
    script: "alert(void(0))",
    description: "",
    tag: "47,9000",
    interpretations: 15,
    triggers: 15,
    metrics: 15,
  },
];

const titleStyles = {
  Title: styled.div`
    display: flex;
  `,
  Label: styled.div`
    flex-basis: 100%;
  `,
};

function Title(props) {
  const { label, description, tag } = props;

  return (
    <div>
      <titleStyles.Title>
        <titleStyles.Label>
          <Button.Link size="big">{label}</Button.Link>
        </titleStyles.Label>
        {tag ? (
          <div>
            <Pill pillColor="mediumRisk">{tag}</Pill>
          </div>
        ) : null}
      </titleStyles.Title>
      <p>{description}</p>
    </div>
  );
}

const itemStyles = {
  Item: styled.div`
    text-align: center;
    width: 100%;
  `,
};

function Item(props) {
  const { value } = props;

  return (
    <itemStyles.Item>
      <Button kind="flat">{value}</Button>
    </itemStyles.Item>
  );
}

storiesOf(`${storyName}`, module).add("Collections Example", () => (
  <Table a11yText="" data={data} width="100%">
    <Table.ColumnDefinition
      width="70%"
      header="Table"
      cell={({ row }) => <Title label={row.label} description={row.description} tag={row.tag} />}
    />
    <Table.ColumnDefinition header="Interpretations" cell={({ row }) => <Item value={row.interpretations} />} />
    <Table.ColumnDefinition header="Triggers" cell={({ row }) => <Item value={row.triggers} />} />
    <Table.ColumnDefinition header="Metrics" cell={({ row }) => <Item value={row.metrics} />} />
    <Table.ColumnDefinition
      header=""
      cell={() => (
        <DropdownMenu>
          <DropdownMenu.Trigger>...</DropdownMenu.Trigger>
          <DropdownMenu.Item onClick={() => {}}>one</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => {}}>two</DropdownMenu.Item>
        </DropdownMenu>
      )}
    />
  </Table>
));
