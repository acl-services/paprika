import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import { toggleDropdown } from "../helpers/toggleHelpers";
import selectors from "../helpers/selectors";

const storyPrefix = `${getStoryUrlPrefix("ListBox")}`;

function pressKey(key) {
  cy.focused().type(`{${key}}`, { force: true });
}

function optionHasFocus(optionName) {
  cy.get(selectors.popoverList)
    .findByText(optionName)
    .should("have.focus");
}

describe("ListBox MultiSelect a11y", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--a-11-y-tests-story`);
    toggleDropdown();
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("should be able to focus on options via keyboard", () => {
    pressKey("downarrow");
    optionHasFocus("The Joker");
    pressKey("downarrow");
    optionHasFocus("Darth Vader");
  });

  it("focus should be moved to the trigger after escaping out of listbox", () => {
    cy.get(selectors.filterInput).should("have.focus");
    pressKey("esc");
    cy.get(selectors.trigger).should("have.focus");
  });

  it("focus should be moved to the filter after going to first option and arrowing up", () => {
    cy.get(selectors.filterInput).should("have.focus");
    pressKey("downarrow");
    optionHasFocus("The Joker");
    pressKey("uparrow");
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("focus moves to filter input in list after selecting options", () => {
    cy.get(selectors.filterInput).should("have.focus");
    pressKey("downarrow");
    pressKey("enter");
    pressKey("downarrow");
    pressKey("enter");
    toggleDropdown();
    cy.get(selectors.popover).should("not.be.visible");
    toggleDropdown();
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("focus can be moved to a raw item", () => {
    pressKey("downarrow");
    pressKey("downarrow");
    pressKey("downarrow");
    optionHasFocus("Raw Item");
  });
});

describe("ListBox SingleSelect a11y", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--a-11-y-single-tests-story`);
    toggleDropdown();
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("focus should be moved to the first option when arrow key down is pressed", () => {
    pressKey("downarrow");
    optionHasFocus("The Joker");
  });

  it("focus should be moved to the option after selected option", () => {
    pressKey("downarrow");
    pressKey("downarrow");
    pressKey("enter");
    cy.get(selectors.popover).should("not.be.visible");
    toggleDropdown();
    optionHasFocus("Darth Vader");
  });

  it("focus should be moved to the trigger after escaping out of listbox", () => {
    pressKey("esc");
    cy.get(selectors.trigger).should("have.focus");
  });
});
