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

  it("should scroll in popover and select option", () => {
    cy.get(selectors.popoverList).scrollTo("bottom");
    cy.contains("Hawkeye").click();
    cy.get(selectors.trigger).should("contain", "Hawkeye");
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

  it("should show correct amount of options and select one", () => {
    cy.get(selectors.filterInput).type("wo");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 2)
      .contains(/catwoman/i)
      .click();
    cy.get(selectors.trigger).should("contain", "Catwoman");
  });

  it("should show all options after erasing filtered input", () => {
    cy.get(selectors.filterInput)
      .type("wo")
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

  it("should filter by option label", () => {
    cy.get(selectors.filterInput).type("sp");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 1)
      .click();
  });
});

describe("ListBox single select popover with getScrollContainer", () => {
  // can't create a failing test
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Has scroll connected to element");
    toggleDropdown();
  });

  it("should scroll with trigger", () => {
    cy.scrollTo("top");
    cy.get(selectors.popover)
      .should("be.visible")
      .should("have.css", "top")
      // 466 was taken from cypress expectation of where popover should be after scroll
      .and("match", /466/);
  });
});

// describe("ListBox single select custom filter", () => {
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

  it("should not show selected options in popover when filtering", () => {
    cy.get(selectors.filterInput).type("wo");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 3);
    cy.get(selectors.filterInput)
      .type("{backspace}")
      .type("{backspace}");
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

describe("ListBox filterSelect from moreExamples", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / more examples", "Filter select");
  });

  it("should show correct options in list and trigger when color filtering", () => {
    cy.get(selectors.trigger)
      .contains(/color/i)
      .click();
    cy.get(selectors.popoverList)
      .contains(/red/i)
      .click();
    cy.get(selectors.popoverList)
      .contains(/yellow/i)
      .click();
    cy.get("body").click();
    cy.get(selectors.trigger)
      .find("span")
      .should("contain", "red, yellow");
    cy.get(selectors.filterSelectTableList)
      .children()
      .should("have.length", 2)
      .and("contain", "Deadpool")
      .and("contain", "Thunderbolts");
  });

  it("should show correct options in list and trigger when price filtering", () => {
    cy.get(selectors.trigger)
      .contains(/price/i)
      .click();
    cy.get(selectors.popoverList)
      .contains(/lower than 500/i)
      .click();
    cy.get(selectors.trigger).should("contain", "lower than 500");
    cy.get(selectors.filterSelectTableList)
      .children()
      .should("have.length", 3)
      .and("contain", "345")
      .and("contain", "109")
      .and("contain", "499");
  });

  it("should show correct options in list and trigger when quantity filtering", () => {
    cy.get(selectors.trigger)
      .contains(/quantity/i)
      .click();
    cy.get(selectors.popoverList)
      .contains(/greater than 100/i)
      .click();
    cy.get(selectors.trigger).should("contain", "greater than 100");
    cy.get(selectors.filterSelectTableList)
      .children()
      .should("have.length", 3)
      .and("contain", "121")
      .and("contain", "342")
      .and("contain", "1231");
  });
});
