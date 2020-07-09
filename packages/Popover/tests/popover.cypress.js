import { getStoryUrlPrefix } from "../../../.storybook/storyTree";
import selectors from "./helpers/selectors";

const baseStory = `${getStoryUrlPrefix("Popover")}-backyard-tests`;
const testStory = "cypress";

describe("Popover", () => {
  beforeEach(() => {
    cy.visitStorybook(`${baseStory}--${testStory}`);
    cy.get(selectors.popover).should("be.not.visible");
  });

  it("should be visible when trigger is clicked", () => {
    cy.get(selectors.popoverTrigger).click();
    cy.get(selectors.popover).should("be.visible");
  });

  it("should not be visible when trigger is clicked again", () => {
    cy.get(selectors.popoverTrigger).click();
    cy.get(selectors.popover).should("be.visible");
    cy.get(selectors.popoverTrigger).click();
    cy.get(selectors.popover).should("be.not.visible");
  });

  it("should be visible when clicked inside popover", () => {
    cy.get(selectors.popoverTrigger).click();
    cy.get(selectors.popover).should("be.visible");
    cy.get(selectors.popover)
      .contains(/button inside/i)
      .click();
    cy.get(selectors.popover).should("be.visible");
  });

  describe("Popover isEager", () => {
    beforeEach(() => {
      const { Popover } = cy.windowHandles;
      Popover.isEager = true;
    });

    it("should be visible when trigger is hovered", () => {
      cy.get(selectors.popoverTrigger).trigger("mouseover");
      cy.get(selectors.popover).should("be.visible");
    });

    it("should be visible when trigger is hovered and content is hovered after", () => {
      cy.get(selectors.popoverTrigger).trigger("mouseover");
      cy.get(selectors.popover).trigger("mouseover");
      cy.get(selectors.popover).should("be.visible");
    });
  });
});
