import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Table", () => {
  it("Should render the table data", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Table")}--basic`);

    cy.getByText("Name").should("be.visible");
    cy.getByText("LastName").should("be.visible");

    cy.getByText("Charles").should("be.visible");
    cy.getByText("Claude").should("be.visible");
    cy.getByText("Alan").should("be.visible");
    cy.getByText("John von").should("be.visible");
    cy.getByText("William").should("be.visible");
    cy.getByText("Douglas").should("be.visible");
    cy.getByText("Robert").should("be.visible");
    cy.getByText("Steve").should("be.visible");
    cy.getByText("Grace Murray").should("be.visible");
    cy.getByText("Vint").should("be.visible");

    cy.getByText("Babbage").should("be.visible");
    cy.getByText("Shannon").should("be.visible");
    cy.getByText("Turing").should("be.visible");
    cy.getByText("Neumann").should("be.visible");
    cy.getByText("Shockley").should("be.visible");
    cy.getByText("Engelbart").should("be.visible");
    cy.getByText("Noyce").should("be.visible");
    cy.getByText("Wozniak").should("be.visible");
    cy.getByText("Hopper").should("be.visible");
    cy.getByText("Cerf").should("be.visible");

    cy.getByText("Name")
      .should("have.css", "font-weight")
      .should("eq", "700");
    cy.getByText("LastName")
      .should("have.css", "font-weight")
      .should("eq", "700");
  });

  it("Should display zebrastripes", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Table")}--has-zebra-stripes`);

    cy.getAllByRole("row")
      .eq(2)
      .should("have.css", "background-color")
      .should("eq", "rgb(247, 247, 247)");

    cy.getAllByRole("row")
      .eq(4)
      .should("have.css", "background-color")
      .should("eq", "rgb(247, 247, 247)");

    cy.getAllByRole("row")
      .eq(6)
      .should("have.css", "background-color")
      .should("eq", "rgb(247, 247, 247)");

    cy.getAllByRole("row")
      .eq(8)
      .should("have.css", "background-color")
      .should("eq", "rgb(247, 247, 247)");

    cy.getAllByRole("row")
      .eq(10)
      .should("have.css", "background-color")
      .should("eq", "rgb(247, 247, 247)");

    cy.getAllByRole("row")
      .eq(1)
      .should("have.css", "background-color")
      .should("eq", "rgb(255, 255, 255)");

    cy.getAllByRole("row")
      .eq(3)
      .should("have.css", "background-color")
      .should("eq", "rgb(255, 255, 255)");

    cy.getAllByRole("row")
      .eq(7)
      .should("have.css", "background-color")
      .should("eq", "rgb(255, 255, 255)");

    cy.getAllByRole("row")
      .eq(9)
      .should("have.css", "background-color")
      .should("eq", "rgb(255, 255, 255)");
  });
  it("Should have borders", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Table")}--border-types`);

    // Default borders
    cy.getAllByRole("cell")
      .eq(0)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.getAllByRole("cell")
      .eq(1)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.getAllByRole("cell")
      .eq(2)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    cy.getAllByRole("cell")
      .eq(3)
      .should("have.css", "border")
      .should("eq", "1px solid rgb(215, 215, 215)");

    // horizontal borders
    cy.getAllByRole("cell")
      .eq(20)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.getAllByRole("cell")
      .eq(21)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.getAllByRole("cell")
      .eq(22)
      .should("have.css", "border-width")
      .should("eq", "1px 0px");

    cy.getAllByRole("cell")
      .eq(23)
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
