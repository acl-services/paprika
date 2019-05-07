import selectors from "../helpers/selectors";

function toggleDropdown() {
  cy.get(selectors.trigger).click();
}

describe("ListBox single select", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Basic");
    toggleDropdown();
  });

  it("should select option and clear it", () => {
    cy.contains("Punisher").click();
    cy.get(selectors.trigger).should("contain", "Punisher");
    cy.get(selectors.clearButton).click();
    cy.get(selectors.trigger).should("contain", "Select one of the options");
    cy.get(selectors.clearButton).should("not.be.visible");
  });
});

describe("ListBox single select zIndex", () => {
  it("should have custom number of 10000", () => {
    cy.visitStorybook("ListBox / single", "Has custom zIndex");
    toggleDropdown();
    cy.get(selectors.popover)
      .should("have.css", "z-index")
      .and("match", /10000/);
  });
});

describe("ListBox single select filter", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Filter");
    toggleDropdown();
  });

  it("should show correct amount of filter options", () => {
    cy.get(selectors.filterInput).type("wo");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 2);
  });

  it("should filter and select an option", () => {
    cy.get(selectors.filterInput).type("Ven");
    cy.get(selectors.popover)
      .contains(/venom/i)
      .click();
    cy.get(selectors.trigger).should("contain", "Venom");
  });

  it("should show all options after erasing filtered input", () => {
    cy.get(selectors.filterInput).type("wo");
    cy.get(selectors.filterInput)
      .type("{backspace}")
      .type("{backspace}");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 7);
  });
});

// describe("ListBox single select with getScrollContainer prop", () => {
//   beforeEach(() => {
//     cy.visitStorybook("ListBox / single", "Has scroll connected to element");
//   });
//
//   it.only("should have scroll of target element", () => {
//     toggleDropdown();
//     cy.get("[data-qa-anchor='popover-content']").should("be.visible");
//     cy.scrollTo(500, 0);
//     cy.wait(800);
//     cy.scrollTo(0, 500);
//   });
// });
