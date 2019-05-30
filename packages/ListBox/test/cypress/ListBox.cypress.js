import selectors from "../helpers/selectors";
import { toggleDropdown } from "../helpers/toggleHelpers";

describe("ListBox single select", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Basic");
    toggleDropdown();
  });

  it("should select option and clear it", () => {
    const character = "Spiderman";
    cy.contains(character).click();
    cy.get(selectors.trigger).should("contain", character);
    cy.get(selectors.clearButton).click();

    cy.get(selectors.trigger).should("contain", "Select...");
    cy.get(selectors.clearButton).should("not.be.visible");
  });

  it("should scroll in popover and select option", () => {
    const character = "Doctor Strange";
    cy.get(selectors.popoverList).scrollTo("bottom");
    cy.contains(character)
      .should("be.visible")
      .click();
    cy.get(selectors.trigger).should("contain", character);
  });
});

describe("ListBox single select zIndex", () => {
  it("should have custom number of 10000", () => {
    cy.visitStorybook("ListBox / cypress", "Has custom zIndex");
    toggleDropdown();
    cy.get(selectors.popover)
      .should("have.css", "z-index")
      .and("match", /10000/);
  });
});

describe("ListBox single select filter", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / ListBox.Filter", "Basic Filter");
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
  it("should filter by option label", () => {
    cy.visitStorybook("ListBox / ListBox.Filter", "Custom Children Filter");
    toggleDropdown();
    cy.get(selectors.filterInput).type("sp");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 1)
      .click();
  });
});

describe("ListBox single select popover with getScrollContainer", () => {
  // can't create a failing test
  it("should scroll with trigger", () => {
    cy.visitStorybook("ListBox / single", "Has scroll connected to element");
    toggleDropdown();
    cy.scrollTo("top");
    cy.get(selectors.popover)
      .should("be.visible")
      .should("have.css", "top")
      // 466 was taken from cypress expectation of where popover should be after scroll
      .and("match", /466/);
  });
});

describe("ListBox single select custom filter", () => {
  it.only("should filter with correct group options or show no results", () => {
    cy.visitStorybook("ListBox / ListBox.Filter", "Custom Filter");
    toggleDropdown();
    cy.get(selectors.filterInput).type("P");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 2);
    cy.get(selectors.filterInput).type("{backspace}");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 7);
    cy.get(selectors.filterInput).type("{backspace}ZZZ");
    cy.get(selectors.popoverList)
      .children()
      .should("have.length", 0);
    cy.get(selectors.popover).should("contain", "Your search did not match any options.");
  });
});

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
    cy.get(selectors.trigger)
      .should("contain", "(2)")
      .and("contain", "Wolverine, Catwoman");
  });

  it("should filter then use arrow and enter keys to select", () => {
    cy.get(selectors.filterInput).type("t");
    cy.get(selectors.filterInput)
      .type("{downarrow}")
      .type("{enter}")
      .type("{downarrow}")
      .type("{enter}");
    cy.get("body").click();
    cy.get(selectors.trigger)
      .should("contain", "(2)")
      .and("contain", "Catwoman, Thunderbolts");
  });
});

describe("ListBox multi select hideOptionOnSelected", () => {
  it("should hide selected options", () => {
    cy.visitStorybook("ListBox / multi", "With hide option on selection");
    toggleDropdown();
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
  it("should not show selected options in popover when filtering", () => {
    cy.visitStorybook("ListBox / multi", "Has filter exclude selected options");
    toggleDropdown();
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
  function shouldHaveListLengthOf(num) {
    cy.get(selectors.filterSelectTableList)
      .children()
      .should("have.length", num);
  }

  function individualFilterSelect(trig, triggerAssert, listLength, ...listAsserts) {
    cy.get(selectors.trigger)
      .contains(trig)
      .click();
    cy.get(selectors.popoverList)
      .contains(triggerAssert)
      .click();
    cy.get(selectors.trigger).should("contain", triggerAssert);
    cy.get(selectors.filterSelectTableList)
      .children()
      .should(children => {
        expect(children).to.have.length(listLength);
        listAsserts.map(anAssertion => expect(children).to.contain(anAssertion));
      });
  }

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
    individualFilterSelect(/price/i, "lower than 500", 3, 345, 109, 499);
  });

  it("should show correct options in list and trigger when quantity filtering", () => {
    individualFilterSelect(/quantity/i, "greater than 100", 3, 121, 342, 1231);
  });

  it("should clear price and quantity filters", () => {
    individualFilterSelect(/quantity/i, "less than 100", 4, 15, 34, 12, 21);
    individualFilterSelect(/price/i, "greater than 500", 3, 2300, 1500, 2800);
    cy.get(selectors.filtersClearButton).click();
    shouldHaveListLengthOf(7);
  });

  it("should filter with no list results and clear filters to show all list items", () => {
    individualFilterSelect(/quantity/i, "greater than 100", 3, 121, 342, 1231);
    individualFilterSelect(/price/i, "greater than 500", 1, 1320);
    cy.get(selectors.trigger)
      .contains(/color/i)
      .click();
    cy.get(selectors.popoverList)
      .contains(/black/i)
      .click();
    cy.get("body").click();
    shouldHaveListLengthOf(0);
    cy.get(selectors.filtersClearButton).click();
    shouldHaveListLengthOf(7);
  });
});
