import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Table", () => {
  it("Should render the table data", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Table")}--basic`);

    [
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
      cy.getByText(name).should("be.visible");
    });

    cy.getByText("Name").should("be.visible");
    cy.getByText("LastName").should("be.visible");

    cy.getByText("Name")
      .should("have.css", "font-weight")
      .should("eq", "700");
    cy.getByText("LastName")
      .should("have.css", "font-weight")
      .should("eq", "700");
  });

  it("Should display zebrastripes", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Table")}--has-zebra-stripes`);

    const grey = "rgb(247, 247, 247)";
    const white = "rgb(255, 255, 255)";

    cy.getAllByRole("row")
      .eq(2)
      .should("have.css", "background-color")
      .should("eq", grey);

    cy.getAllByRole("row")
      .eq(4)
      .should("have.css", "background-color")
      .should("eq", grey);

    cy.getAllByRole("row")
      .eq(6)
      .should("have.css", "background-color")
      .should("eq", grey);

    cy.getAllByRole("row")
      .eq(8)
      .should("have.css", "background-color")
      .should("eq", grey);

    cy.getAllByRole("row")
      .eq(10)
      .should("have.css", "background-color")
      .should("eq", grey);

    cy.getAllByRole("row")
      .eq(1)
      .should("have.css", "background-color")
      .should("eq", white);

    cy.getAllByRole("row")
      .eq(3)
      .should("have.css", "background-color")
      .should("eq", white);

    cy.getAllByRole("row")
      .eq(7)
      .should("have.css", "background-color")
      .should("eq", white);

    cy.getAllByRole("row")
      .eq(9)
      .should("have.css", "background-color")
      .should("eq", white);
  });
  it("Should have borders", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Table")}--border-types`);

    // Grid borders
    cy.getAllByRole("cell")
      .eq(20)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.getAllByRole("cell")
      .eq(21)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.getAllByRole("cell")
      .eq(22)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.getAllByRole("cell")
      .eq(23)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    // Default/horizontal borders
    cy.getAllByRole("cell")
      .eq(0)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.getAllByRole("cell")
      .eq(1)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.getAllByRole("cell")
      .eq(2)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.getAllByRole("cell")
      .eq(3)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    // vertical borders
    cy.getAllByRole("cell")
      .eq(40)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");

    cy.getAllByRole("cell")
      .eq(41)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");

    cy.getAllByRole("cell")
      .eq(42)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");

    cy.getAllByRole("cell")
      .eq(43)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");
  });
});
