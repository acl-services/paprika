import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import { toggleDropdown } from "../helpers/toggleHelpers";
import selectors from "../helpers/selectors";

const storyPrefix = `${getStoryUrlPrefix("ListBox")}`;

function arrowUpKeyPress() {
  cy.focused().type("{uparrow}", { force: true });
}

function arrowDownKeyPress() {
  cy.focused().type("{downarrow}", { force: true });
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
    cy.wait(350);
  });

  it("focus should be moved to the filter input once dropdown is opened", () => {
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("should be able to focus on options via keyboard", () => {
    arrowDownKeyPress();
    optionHasFocus("The Joker");
    arrowDownKeyPress();
    optionHasFocus("Darth Vader");
  });

  it("focus should be moved to the trigger after escaping out of listbox", () => {
    cy.get(selectors.filterInput).should("have.focus");
    cy.focused().type("{esc}", { force: true });
    cy.get(selectors.trigger).should("have.focus");
  });

  it("focus should be moved to the filter after going to first option and arrowing up", () => {
    cy.get(selectors.filterInput).should("have.focus");
    arrowDownKeyPress();
    optionHasFocus("The Joker");
    arrowUpKeyPress();
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("focus moves to filter input in list after selecting options", () => {
    cy.get(selectors.filterInput).should("have.focus");
    arrowDownKeyPress();
    cy.focused().type("{enter}", { force: true });
    arrowDownKeyPress();
    cy.focused().type("{enter}", { force: true });
    toggleDropdown();
    cy.wait(350);
    toggleDropdown();
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("focus can be moved to a raw item", () => {
    arrowDownKeyPress();
    arrowDownKeyPress();
    arrowDownKeyPress();
    optionHasFocus("Raw Item");
  });
});

describe("ListBox SingleSelect a11y", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--a-11-y-single-tests-story`);
    toggleDropdown();
    cy.wait(350);
  });

  it("focus should be moved to the first option when arrow key down is pressed", () => {
    arrowDownKeyPress();
    optionHasFocus("The Joker");
  });

  it("focus should be moved to the option after selected option", () => {
    arrowDownKeyPress();
    arrowDownKeyPress();
    cy.focused().type("{enter}", { force: true });
    cy.wait(350);
    toggleDropdown();
    optionHasFocus("Darth Vader");
  });
});
