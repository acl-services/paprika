import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Pagination", () => {
  beforeEach(() => {
    cy.visitStorybook(`${getStoryUrlPrefix("Pagination")}-examples--interactive-pagination`);
  });
  it("Should render", () => {
    cy.findByText("Page 1").should("be.visible");
    cy.findByText("1").should("be.visible");
    cy.findByText("2").should("be.visible");
    cy.findByText("3").should("be.visible");
    cy.findAllByRole("button")
      .eq(0)
      .should("be.visible");
    cy.findAllByRole("button")
      .eq(4)
      .should("be.visible");
  });
  it("Should update page selection", () => {
    cy.findByText("1")
      .should("have.css", "background-color")
      .should("eq", "rgb(120, 92, 186)");
    cy.findByText("Page 1").should("be.visible");
    cy.findByText("Computer").should("be.visible");
    cy.findByText("Entity").should("be.visible");
    cy.findByText("IT Asset").should("be.visible");

    cy.findByText("2").click();
    cy.findByText("2")
      .should("have.css", "background-color")
      .should("eq", "rgb(120, 92, 186)");
    cy.findByText("Page 2").should("be.visible");
    cy.findByText("Policy").should("be.visible");
    cy.findByText("Process").should("be.visible");
    cy.findByText("Vendor").should("be.visible");

    cy.findAllByRole("button")
      .eq(4)
      .click();
    cy.findByText("3")
      .should("have.css", "background-color")
      .should("eq", "rgb(120, 92, 186)");
    cy.findByText("Page 3").should("be.visible");
    cy.findByText("K").should("be.visible");

    cy.findAllByRole("button")
      .eq(0)
      .click()
      .click();
    cy.findByText("1")
      .should("have.css", "background-color")
      .should("eq", "rgb(120, 92, 186)");
    cy.findByText("Page 1").should("be.visible");
    cy.findByText("Computer").should("be.visible");
    cy.findByText("Entity").should("be.visible");
    cy.findByText("IT Asset").should("be.visible");
  });
});
