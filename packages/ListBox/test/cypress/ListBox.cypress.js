<<<<<<< HEAD
import selectors from "../helpers/selectors";

function toggleDropdown() {
  cy.get(selectors.trigger).click();
}

describe("ListBox single select", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Basic");
    toggleDropdown();
  });

  it("should selected option and clear it", () => {
    cy.contains("Punisher").click();
    getListBoxTrigger().should("contain", "Punisher");
    getClearButton().click();
    getListBoxTrigger().should("contain", "Select one of the options");
    getClearButton().should("not.be.visible");
  });
});

describe("ListBox single select filter", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Filter");
    toggleDropdown();
  });

  it("should show correct amount of filter options", () => {
    getFilterInput().type("wo");
    getPopoverList()
      .children()
      .should("have.length", 2);
  });

  it("filters and selects option", () => {
    getFilterInput().type("Ven");
    getPopoverContent()
      .contains(/venom/i)
      .click();
  });

  // it.only("should show all options after erasing filtered input", () => {
  //   getFilterInput().type("wo");
  //   getFilterInput().type("{backspace}", "{backspace}");
  //   getPopoverList()
  //     .children()
  //     .should("have.length", 10);
  // });
});

describe("ListBox single select popover with getScrollContainer", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Has scroll connected to element");
    toggleDropdown();
  });

  it("should scroll with trigger", () => {
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

describe("ListBox multi select filter", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / multi", "With Filter");
    toggleDropdown();
  });

  it("should filter, select, deselect and close trigger", () => {
    cy.get(selectors.filterInput).type("w");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 3)
      .contains(/spawn/i)
      .click();
    cy.contains(/wolverine/i).click();
    cy.contains(/catwoman/i).click();
    cy.contains("li", /spawn/i).click();
    cy.get("body").click();
    cy.get(selectors.trigger).should("contain", "Wolverine, Catwoman");
  });
});

describe("ListBox multi select hideOptionOnSelected", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / multi", "With hide option on selection");
    toggleDropdown();
  });

  it("should hide selected options", () => {
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 7)
      .contains(/spawn/i)
      .click();
    cy.contains(/wolverine/i).click();
    cy.contains(/deadpool/i).click();
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 4);
  });
});

describe("ListBox multi select hide selections on filter", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / multi", "Has filter exclude selected options");
    toggleDropdown();
  });

  it.only("should not show selected options in popover when filtering", () => {
    cy.get(selectors.filterInput).type("wo");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 3);
    cy.get(selectors.filterInput).type("{backspace} {backspace}");
    cy.get(selectors.popoverList)
      .contains(/catwoman/i)
      .click();
    cy.contains(/wolverine/i).click();
    cy.get(selectors.filterInput).type("wo");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 1);
  });
});
