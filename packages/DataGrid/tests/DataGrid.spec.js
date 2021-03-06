import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DataGrid from "../src";

const data = [
  /* column */ /* colum */
  { myColum1: 1, myColum2: "hi" }, // row 1
  { myColum1: 2, myColum2: "hello" }, // row 2
  { myColum1: 3, myColum2: "hola" }, // row 3
];

function renderComponent() {
  return render(
    <DataGrid data={data}>
      <DataGrid.ColumnDefinition header="Colum 1" cell="myColum1" />
      <DataGrid.ColumnDefinition header="Colum 2" cell="myColum2" />
    </DataGrid>
  );
}

describe("DataGrid", () => {
  it("Displays data inside the cell", () => {
    const { getByText } = renderComponent();
    expect(getByText("hi")).toBeInTheDocument();
    expect(getByText("hello")).toBeInTheDocument();
    expect(getByText("hola")).toBeInTheDocument();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();

    // TODO: Violation - "Certain ARIA roles must contain particular children (aria-required-children)"
    expect(
      await axe(container, {
        rules: {
          "aria-required-children": { enabled: false },
        },
      })
    ).toHaveNoViolations();
  });
});
