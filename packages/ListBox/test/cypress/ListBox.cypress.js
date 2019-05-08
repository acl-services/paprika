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

describe("ListBox single select label filter", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Filter custom nodes");
    toggleDropdown();
  });

  it.only("should filter by option label", () => {
    cy.get(selectors.filterInput).type("ba");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 1)
      .click();
  });
});

describe("ListBox single select popover with getScrollContainer", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Has scroll connected to element");
    toggleDropdown();
  });

  it("should scroll with trigger", () => {
    // should not use wait
    cy.wait(1000);
    cy.scrollTo("top");
    cy.get(selectors.popover)
      .should("be.visible")
      .should("have.css", "top")
      // 466 was taken from cypress expectation
      .and("match", /466/);
  });
});

// describe("ListBox single select custom filter", () => {
//   beforeEach(() => {
//
//   });
//
//   it("should scroll with trigger", () => {
//   });
// });
