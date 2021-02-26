import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import { toggleDropdown } from "../helpers/toggleHelpers";
import selectors from "../helpers/selectors";

const storyPrefix = `${getStoryUrlPrefix("ListBox")}`;

function arrowUpKeyPress() {
  cy.focused().type("{downarrow}", { force: true });
}

function arrowDownKeyPress() {
  cy.focused().type("{uparrow}", { force: true });
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
  });

  it("focus should be moved to the filter input once dropdown is opened", () => {
    cy.get(selectors.filterInput).should("have.focus");
  });

  it("focus should be moved to the option once arrow key down is pressed", () => {
    cy.wait(400);
    arrowUpKeyPress();
    optionHasFocus("The Joker");
    arrowUpKeyPress();
    optionHasFocus("Darth Vader");
  });

  it("focus should be moved to the trigger after escaping out of listbox", () => {
    cy.get(selectors.filterInput).should("have.focus");
    cy.focused().type("{esc}", { force: true });
    cy.get(selectors.trigger).should("have.focus");
  });

  it("focus should be moved to the filter after going to first option and arrowing up", () => {
    cy.get(selectors.filterInput).should("have.focus");
    arrowUpKeyPress();
    optionHasFocus("The Joker");
    arrowDownKeyPress();
    cy.get(selectors.filterInput).should("have.focus");
  });
});

describe("ListBox SingleSelect a11y", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--a-11-y-single-tests-story`);
    toggleDropdown();
  });

  xit("focus should be moved to the first available option", () => {
    optionHasFocus("The Joker");
  });

  it("focus should be moved to the option after selected option", () => {
    optionHasFocus("Lord Voldemort");
    cy.wait(400);
    toggleDropdown();
    cy.wait(400);
    arrowUpKeyPress();
  });
});
