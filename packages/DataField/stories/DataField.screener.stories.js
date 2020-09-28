import React from "react";
import Table from "@paprika/table";
import DataGrid from "@paprika/data-grid";
import Popover from "@paprika/popover";
import styled, { css } from "styled-components";
import L10n from "@paprika/l10n";
import InfoCircle from "@paprika/icon/lib/InfoCircle";
import tokens from "@paprika/tokens";
import { getStoryName } from "storybook/storyTree";
import DataField from "../src";

export default {
  title: getStoryName("DataField"),
};

const data = [
  { name: "Abbeline Doe", income: 153234.87, taxes: 32300.34 },
  { name: "Alivia Smith", income: 85720.92, taxes: 17300.43 },
  { name: "Aniya Johanson", income: 45328.54, taxes: 14302.23 },
];

const Container = styled.div(() => {
  return css`
    [data-pka-anchor="data-fields-numeric"] {
      font-size: 20px;
    }
  `;
});

export const Screener = () => {
  return (
    <div style={{ padding: "32px", display: "flex" }}>
      <div>
        <L10n locale="de">
          <Container>
            <DataField.Numeric align={DataField.types.align.LEFT} currency="USD" number={1240} />
            <DataField.Numeric align={DataField.types.align.LEFT} currency="JPN" number={340.43} />
            <DataField.Numeric align={DataField.types.align.LEFT} number={133240.234322} />
          </Container>
        </L10n>
        <L10n locale="fr">
          <Container>
            <DataField.Numeric align={DataField.types.align.LEFT} currency="USD" number={1240} />
            <DataField.Numeric align={DataField.types.align.LEFT} currency="JPN" number={340.43} />
            <DataField.Numeric align={DataField.types.align.LEFT} number={133240.234322} />
          </Container>
        </L10n>
        <L10n>
          <Container>
            <DataField.Numeric align={DataField.types.align.LEFT} currency="USD" number={1240} />
            <DataField.Numeric align={DataField.types.align.LEFT} currency="JPN" number={340.43} />
            <DataField.Numeric align={DataField.types.align.LEFT} number={133240.234322} />
          </Container>
        </L10n>
        <L10n locale="de">
          <Container>
            <DataField.Numeric
              align={DataField.types.align.LEFT}
              displayOnlyDecimals={false}
              currency="USD"
              number={1240}
            />
            <DataField.Numeric
              align={DataField.types.align.LEFT}
              displayOnlyDecimals={false}
              currency="JPN"
              number={340.43}
            />
            <DataField.Numeric displayOnlyDecimals={false} align={DataField.types.align.LEFT} number={133240.234322} />
          </Container>
        </L10n>
      </div>
      <div style={{ paddingLeft: "32px" }}>
        <h2>Table</h2>
        <Table data={data}>
          <Table.ColumnDefinition header="Project" cell="name" />
          <Table.ColumnDefinition header="Income" cell={({ row }) => <DataField.Numeric number={row.income} />} />
          <Table.ColumnDefinition header="Taxes" cell={({ row }) => <DataField.Numeric number={row.taxes} />} />
          <Table.ColumnDefinition
            header="Revenue"
            cell={({ row }) => (
              <a href="http://wegalvanize.com">
                <DataField.Numeric number={Number(row.income - row.taxes)} />
              </a>
            )}
          />
        </Table>
        <h2>With full delimiters</h2>
        <Table data={data}>
          <Table.ColumnDefinition header="Project" cell="name" />
          <Table.ColumnDefinition
            header="Income"
            cell={({ row }) => <DataField.Numeric displayOnlyDecimals={false} number={row.income} />}
          />
          <Table.ColumnDefinition
            header="Taxes"
            cell={({ row }) => <DataField.Numeric displayOnlyDecimals={false} number={row.taxes} />}
          />
          <Table.ColumnDefinition
            header="Revenue"
            cell={({ row }) => (
              <a href="http://wegalvanize.com">
                <DataField.Numeric displayOnlyDecimals={false} number={Number(row.income - row.taxes)} />
              </a>
            )}
          />
        </Table>

        <h2>DataGrid</h2>
        <L10n locale="fr">
          <h3>French locale</h3>
          <DataGrid data={data}>
            <DataGrid.ColumnDefinition header="Project" cell="name" />
            <DataGrid.ColumnDefinition header="Income" cell={({ row }) => <DataField.Numeric number={row.income} />} />
            <DataGrid.ColumnDefinition header="Taxes" cell={({ row }) => <DataField.Numeric number={row.taxes} />} />
            <DataGrid.ColumnDefinition
              header="Revenue"
              cell={({ row }) => <DataField.Numeric number={Number(row.income - row.taxes)} />}
            />
          </DataGrid>
        </L10n>
        <L10n locale="de">
          <h3>German locale</h3>
          <DataGrid data={data}>
            <DataGrid.ColumnDefinition header="Project" cell="name" />
            <DataGrid.ColumnDefinition
              header="Income"
              cell={({ row }) => <DataField.Numeric align={DataField.types.align.LEFT} number={row.income} />}
            />
            <DataGrid.ColumnDefinition
              header="Taxes"
              cell={({ row }) => <DataField.Numeric align={DataField.types.align.LEFT} number={row.taxes} />}
            />
            <DataGrid.ColumnDefinition
              header="Revenue"
              cell={({ row }) => (
                <DataField.Container align="right">
                  <DataField.Numeric
                    align={DataField.types.align.LEFT}
                    color={tokens.textColor.link}
                    number={Number(row.income - row.taxes)}
                  />
                  <Popover isEager>
                    <Popover.Tip />
                    <Popover.Trigger style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ display: "inline-block" }}>
                        <InfoCircle />
                      </span>
                    </Popover.Trigger>
                    <Popover.Content>
                      <Popover.Card>Example info text</Popover.Card>
                    </Popover.Content>
                  </Popover>
                </DataField.Container>
              )}
            />
          </DataGrid>
        </L10n>
      </div>
    </div>
  );
};
