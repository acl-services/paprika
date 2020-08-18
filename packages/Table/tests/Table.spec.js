import React from "react";
import { render } from "@testing-library/react";
import Table from "../src/Table";

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

    expect(getByText("Name")).toBeVisible();
    expect(getByText("LastName")).toBeVisible();

    expect(getByText("Charles")).toBeVisible();
    expect(getByText("Claude")).toBeVisible();
    expect(getByText("Alan")).toBeVisible();
    expect(getByText("John von")).toBeVisible();
    expect(getByText("William")).toBeVisible();
    expect(getByText("Douglas")).toBeVisible();
    expect(getByText("Robert")).toBeVisible();
    expect(getByText("Steve")).toBeVisible();
    expect(getByText("Grace Murray")).toBeVisible();
    expect(getByText("Vint")).toBeVisible();

    expect(getByText("Babbage")).toBeVisible();
    expect(getByText("Shannon")).toBeVisible();
    expect(getByText("Turing")).toBeVisible();
    expect(getByText("Neumann")).toBeVisible();
    expect(getByText("Shockley")).toBeVisible();
    expect(getByText("Engelbart")).toBeVisible();
    expect(getByText("Noyce")).toBeVisible();
    expect(getByText("Wozniak")).toBeVisible();
    expect(getByText("Hopper")).toBeVisible();
    expect(getByText("Cerf")).toBeVisible();
  });
});
