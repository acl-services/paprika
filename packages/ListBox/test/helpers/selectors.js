export const selectors = {
  popover: "[data-qa-anchor='popover-content']",
  filterInput: "[data-qa-anchor='list-filter-input']",
  popoverList: "[data-qa-anchor='styled-list']",
  clearButton: "[data-qa-anchor='clear-button']",
  trigger: "[data-qa-anchor='trigger']",
  filterSelectTableList: "[data-qa-anchor='table-list']",
  filtersClearButton: "[data-qa-anchor='clear-filters-button']",
};

export function toggleLazyDropDown() {
  cy.contains("Marvel API").click();
}

export function toggleDropdown() {
  cy.get(selectors.trigger).click();
}

export function shouldHaveListLengthOf(num) {
  cy.get(selectors.filterSelectTableList)
    .children()
    .should("have.length", num);
}

export function individualFilterSelect(trig, triggerAssert, listLength, ...listAsserts) {
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
