import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import selectors from "../helpers/selectors";

const storyPrefix = `${getStoryUrlPrefix("ListBox")}`;
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
    cy.visitStorybook(`${storyPrefix}-examples--filter-select`);
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
