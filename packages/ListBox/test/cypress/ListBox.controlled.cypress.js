import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import selectors from "../helpers/selectors";
import { toggleDropdown } from "../helpers/toggleHelpers";

const storyPrefix = `${getStoryUrlPrefix("ListBox")}`;
const typingDelay = { delay: 250 };

// TODO: should this go in ally or stay in separate controlled tests

describe("Controlled ListBox single select", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-backyard-sandbox--list-box-directory-story`);
    toggleDropdown();
  });

  it("should be able to select option when enter key is pressed", () => {
    const contact0 = "contact0";

    cy.get(selectors.filterInput)
      .type("{downarrow}", typingDelay)
      .type("{enter}");

    cy.get(selectors.trigger).should("contain", contact0);
  });

  it("should select option and clear it", () => {
    const contact0 = "contact0";

    cy.get(selectors.filterInput)
      .type("{downarrow}", typingDelay)
      .type("{enter}");

    cy.get(selectors.trigger).should("contain", contact0);
    cy.get(selectors.clearButton).click();
    cy.get(selectors.trigger).should("contain", "Select user...");
    cy.get(selectors.clearButton).should("not.exist");
  });
});

describe("Controlled ListBox multi select filter", () => {
  beforeEach(() => {
    cy.visitStorybook(`${storyPrefix}-examples-multi--fully-controlled-with-filter`);
    toggleDropdown();
  });

  it("should be be able to select multiple entries using keyboard only", () => {
    // don't know if there is a better way to do it sequentially
    cy.get(selectors.filterInput)
      .type("{downarrow}", typingDelay)
      .type("{enter}")
      .type("{downarrow}{downarrow}", typingDelay)
      .type("{enter}")
      .type("{downarrow}{downarrow}{downarrow}", typingDelay)
      .type("{enter}");

    cy.get("body").click({ force: true });

    cy.get(selectors.trigger)
      .should("contain", "(3)")
      .and("contain", "Black Panther, Wonder Woman, Spiderman");
  });
});
