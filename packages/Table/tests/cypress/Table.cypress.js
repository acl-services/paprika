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
      cy.findByText(name).should("be.visible");
    });

    cy.findByText("Name").should("be.visible");
    cy.findByText("LastName").should("be.visible");

    cy.findByText("Name")
      .should("have.css", "font-weight")
      .should("eq", "700");
    cy.findByText("LastName")
      .should("have.css", "font-weight")
      .should("eq", "700");
  });

  it("Should have borders", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Table")}--border-types`);

    // Grid borders
    cy.findAllByRole("cell")
      .eq(20)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.findAllByRole("cell")
      .eq(21)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.findAllByRole("cell")
      .eq(22)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.findAllByRole("cell")
      .eq(23)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    // Default/horizontal borders
    cy.findAllByRole("cell")
      .eq(0)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.findAllByRole("cell")
      .eq(1)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.findAllByRole("cell")
      .eq(2)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.findAllByRole("cell")
      .eq(3)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    // vertical borders
    cy.findAllByRole("cell")
      .eq(40)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");

    cy.findAllByRole("cell")
      .eq(41)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");

    cy.findAllByRole("cell")
      .eq(42)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");

    cy.findAllByRole("cell")
      .eq(43)
      .should("have.css", "border-width")
      .should("eq", "0px 1px");
  });
});
