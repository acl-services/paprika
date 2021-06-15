import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import DataGrid from "../src";
import fixtures from "./helpers/fixtures";

const storyName = getStoryName("DataGrid");

const data = fixtures(1);

function HorizontalScroll() {
  return (
    <React.Fragment>
      <hr />
      <p>
        If the width of the columns of the DataGrid exceed the DataGrid&apos;s <code>width</code> prop, the DataGrid
        will scroll horizontally:
      </p>
      <DataGrid data={data} width={250}>
        <DataGrid.ColumnDefinition header="Countries" cell="country" />
        <DataGrid.ColumnDefinition header="Name" cell="name" />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
      </DataGrid>
    </React.Fragment>
  );
}

function GapAtEnd() {
  return (
    <React.Fragment>
      <hr />
      <p>
        If the width of the columns of the DataGrid are less than the DataGrid&apos;s <code>width</code> prop (and no
        columns have a&nbsp;
        <code>canGrow</code> prop), the DataGrid will have a gap after the last column:
      </p>
      <DataGrid data={data} width={1000}>
        <DataGrid.ColumnDefinition header="Countries" cell="country" />
        <DataGrid.ColumnDefinition header="Name" cell="name" />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
      </DataGrid>
    </React.Fragment>
  );
}

export function WithCanGrow() {
  return (
    <React.Fragment>
      <hr />
      <p>
        If the width of the columns of the DataGrid are less than the DataGrid&apos;s <code>width</code> prop and some
        columns have a <code>canGrow</code> prop, the DataGrid will share excess space equally amongst the columns with
        the canGrow prop and have no gap after the last column:
      </p>
      <DataGrid data={data} width={1000}>
        <DataGrid.ColumnDefinition header="Countries" cell="country" />
        <DataGrid.ColumnDefinition header="Name (canGrow)" cell="name" canGrow />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
      </DataGrid>
    </React.Fragment>
  );
}

export function DoesntGrow() {
  return (
    <React.Fragment>
      <hr />
      <p>
        The DataGrid below does not have a <code>width</code> prop, so its width is auto-calculated and there is no
        excess space, therefore the <code>canGrow</code> prop does nothing:
      </p>
      <DataGrid data={data}>
        <DataGrid.ColumnDefinition header="Countries" cell="country" />
        <DataGrid.ColumnDefinition header="Name (canGrow)" cell="name" canGrow />
        <DataGrid.ColumnDefinition header="Goals" cell="goals" />
      </DataGrid>
    </React.Fragment>
  );
}

storiesOf(`${storyName}/Examples`, module).add("Widths", () => (
  <Sbook.Story>
    <Heading level={2}>DataGrid and its columns&apos; widths</Heading>
    <Sbook.Tagline>
      The <code>DataGrid</code> can be given a width via the <code>width</code> prop, or it can be calculated based on
      the width of its columns. Columns have a default width, or one can be provided via the <code>width</code> prop.
      <br />
      Columns can use a <code>canGrow</code> prop, which will allow them to grow if the DataGrid &apos;s width prop is
      greater than the width of all of its columns combined.
    </Sbook.Tagline>
    <HorizontalScroll />
    <GapAtEnd />
    <WithCanGrow />
    <DoesntGrow />
  </Sbook.Story>
));
