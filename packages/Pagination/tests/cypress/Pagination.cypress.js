import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Pagination", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("Pagination")}-examples--interactive-pagination`);
  });
  it("Should render", () => {
    cy.getByText("Page 1").should("be.visible");
    cy.getByText("1").should("be.visible");
    cy.getByText("2").should("be.visible");
    cy.getByText("3").should("be.visible");
    cy.getAllByRole("button")
      .eq(0)
      .should("be.visible");
    cy.getAllByRole("button")
      .eq(2)
      .should("be.visible");
  });
  it("Should update page selection", () => {
    cy.getByText("1")
      .should("have.css", "background-color")
      .should("eq", "rgb(51, 117, 84)");
    cy.getByText("Page 1").should("be.visible");
    cy.getByText("Computer").should("be.visible");
    cy.getByText("Entity").should("be.visible");
    cy.getByText("IT Asset").should("be.visible");

    cy.getByText("2").click();
    cy.getByText("2")
      .should("have.css", "background-color")
      .should("eq", "rgb(51, 117, 84)");
    cy.getByText("Page 2").should("be.visible");
    cy.getByText("Policy").should("be.visible");
    cy.getByText("Process").should("be.visible");
    cy.getByText("Vendor").should("be.visible");

    cy.getAllByRole("button")
      .eq(2)
      .click();
    cy.getByText("3")
      .should("have.css", "background-color")
      .should("eq", "rgb(51, 117, 84)");
    cy.getByText("Page 3").should("be.visible");
    cy.getByText("K").should("be.visible");

    cy.getAllByRole("button")
      .eq(0)
      .click()
      .click();
    cy.getByText("1")
      .should("have.css", "background-color")
      .should("eq", "rgb(51, 117, 84)");
    cy.getByText("Page 1").should("be.visible");
    cy.getByText("Computer").should("be.visible");
    cy.getByText("Entity").should("be.visible");
    cy.getByText("IT Asset").should("be.visible");
  });
});
