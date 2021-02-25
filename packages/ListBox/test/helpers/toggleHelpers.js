import selectors from "./selectors";

export function openLazyDropDown() {
  cy.contains("Marvel API").click();
}

export function toggleDropdown() {
  cy.get(selectors.trigger).click();
  cy.get(selectors.popover).should("be.visible");
}
