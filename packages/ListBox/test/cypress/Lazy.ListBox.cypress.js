import selectors from "../helpers/selectors";

function toggleDropDown() {
  cy.contains("Marvel API").click();
}

describe("Lazy ListBox", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / more examples", "Lazy ListBox");
    toggleDropDown();
  });

  it("should select three options and see three images", () => {
    cy.get("#root")
      .children()
      .should("have.length", 1);
    cy.contains("Namora").click();
    cy.get(selectors.popoverList).scrollTo("bottom");
    cy.contains("Satana").click();
    cy.contains("Sauron").click();
    cy.contains("Accept").click();
    cy.get(selectors.popover).should("not.be.visible");
    cy.get("#root div:first")
      .children()
      .should("have.length", 3)
      .and("contain", "Namora")
      .and("contain", "Satana")
      .and("contain", "Sauron");
  });

  it.only("should select options and clear selections", () => {
    cy.contains("Namora").click();
    // cy.contains("Nebula")
    //   .should("have.css", "font-weight")
    //   .and("match", 400);
    cy.contains("Nebula").click();
    // cy.contains("Nebula").should("have.css", "font-weight");
    cy.contains("Clear").click();
  });
});
