import React from "react";
import { render } from "@testing-library/react";
import Table from "../../src/Table";

const data = [
  { name: "Charles ", lastName: "Babbage" },
  { name: "Claude ", lastName: "Shannon" },
  { name: "Alan ", lastName: "Turing" },
  { name: "John  von", lastName: " Neumann" },
  { name: "William", lastName: "Shockley" },
  { name: "Douglas", lastName: "Engelbart" },
  { name: "Robert", lastName: "Noyce" },
  { name: "Steve", lastName: "Wozniak" },
  { name: "Grace Murray", lastName: "Hopper" },
  { name: "Vint", lastName: "Cerf" },
];

function renderComponent() {
  return render(
    <Table data={data}>
      <Table.ColumnDefinition header="Name" cell="name" />
      <Table.ColumnDefinition header="LastName" cell="lastName" />
    </Table>
  );
}

describe("Table", () => {
  it("Should render data in the table component", () => {
    const { getByText } = renderComponent();

    [
      "Name",
      "LastName",
      "Charles",
      "Claude",
      "Alan",
      "John von",
      "William",
      "Douglas",
      "Robert",
      "Steve",
      "Grace Murray",
      "Vint",
      "Babbage",
      "Shannon",
      "Turing",
      "Neumann",
      "Shockley",
      "Engelbart",
      "Noyce",
      "Wozniak",
      "Hopper",
      "Cerf",
    ].forEach(name => {
      expect(getByText(name)).toBeVisible();
    });
  });
});
