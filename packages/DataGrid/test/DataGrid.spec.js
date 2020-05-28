import React from "react";
import { render } from "@testing-library/react";
import DataGrid from "../src";

function renderComponent() {
  const renderComponent = render(
    <DataGrid
      data={[{ myColum1: 1, myColum2: "hi" }, { myColum1: 2, myColum2: "hello" }, { myColum1: 3, myColum2: "hola" }]}
    >
      <DataGrid.ColumnDefinition
        header="Column 2"
        cell={({ row }) => (row.myColum2 === "hi" ? `👋 ${row.myColum2}` : row.myColum2)}
        cellA11yText={() => "custom a11y text"}
      />
    </DataGrid>
  );

  return {
    ...renderComponent,
  };
}

describe("DataGrid", () => {
  let getByRole;
  let getByText;

  beforeEach(() => {
    ({ getByRole, getByText } = renderComponent());
  });

  it("should render a table with column", () => {
    expect(getByRole("grid")).toBeInTheDocument();
    expect(getByRole("columnheader")).toBeInTheDocument();
  });

  it("should render a table with custom content", () => {
    expect(getByRole("grid")).toBeInTheDocument();
    expect(getByText(/👋/i)).toBeInTheDocument();
  });
});
