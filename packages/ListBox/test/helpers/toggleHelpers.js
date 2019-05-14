import selectors from "./selectors";

export function toggleLazyDropDown() {
  cy.contains("Marvel API").click();
}

export function toggleDropdown() {
  cy.get(selectors.trigger).click();
}
