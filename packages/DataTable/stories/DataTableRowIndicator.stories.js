import React from "react";
import { storiesOf } from "@storybook/react";
import DataTable from "../src";
import fixtures from "./fixtures";
import { viewPortHeight } from "./helpers";

const data = fixtures(8);

function App() {
  const [selected, setSelected] = React.useState([]);
  const [selectedAll, setSelectedAll] = React.useState(false);
  const [multipleColums] = React.useState(() => {
    return Array(20)
      .fill(null)
      .map((_, index) => {
        return (
          <DataTable.ColumnDefinition
            key={index}
            id={`col_definition${index}`}
            header={() => index}
            cell={() => index}
          />
        );
      });
  });
  function isSelected(row, rowIndex) {
    return selected.includes(rowIndex) ? "checked" : "unchecked";
  }

  function handleSelected(row, rowIndex) {
    if (selected.includes(rowIndex)) {
      setSelected(selected => selected.filter(index => index !== rowIndex));
      return;
    }

    setSelected(selected => [...new Set([...selected, rowIndex])]); // Set doesn't accept duplicates.
  }

  function handleSelectedAll(row, rowIndex, { start, end }) {
    if (selectedAll) {
      setSelected(() => []);
      setSelectedAll(() => false);
      return;
    }

    setSelectedAll(() => true);
    setSelected(selected => {
      const indexesSeleceted = [];
      for (let i = start, len = end; i <= len; i++) {
        indexesSeleceted.push(i);
      }

      return [...new Set([...selected, ...indexesSeleceted])]; // Set doesn't accept duplicates.
    });
  }

  function isSelectedAll(row, rowIndex, { start, end }) {
    const pagesize = end - start + 1; // + 1 we have to count zero
    if ((selected && selected.length) > 0 && selected.length !== pagesize) {
      return "indeterminate";
    }

    return selectedAll ? "checked" : "unchecked";
  }

  return (
    <React.Fragment>
      <p>
        Show case how to implemented a <code>select row</code> pattern, keep in mind if you want to use this pattern as
        select all row not only the ones that are visible/load on the dom you can do it implementing your own logic.
      </p>
      <DataTable keygen="id" data={data} height={viewPortHeight()}>
        <DataTable.ColumnDefinition
          id="rowIndicator"
          header={(...args) => (
            <DataTable.RowIndicator
              {...args}
              isSelected={isSelectedAll}
              onSelected={handleSelectedAll}
              hasIndexIndicator={false}
            />
          )}
          width={50}
          cell={(...args) => {
            return <DataTable.RowIndicator {...args} isSelected={isSelected} onSelected={handleSelected} />;
          }}
        />
        <DataTable.ColumnDefinition id="name" header="Name" cell="name" />
        <DataTable.ColumnDefinition id="goals" header="Goals" cell="goals" />
        {multipleColums}
      </DataTable>
    </React.Fragment>
  );
}

storiesOf("DataTable", module).add("Row Indicator", () => <App />);
