import selectors from "./helpers/selectors";

describe("Popover", () => {
  beforeEach(() => {
    cy.visitStorybook("Popover", "Basic Popover Test");
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

  describe("Popover isEager", () => {
    beforeEach(() => {
      cy.visitStorybook("Popover", "Basic Popover Test");
      cy.get(selectors.popover).should("be.not.visible");
    });

    it("should be visible when trigger is hovered", () => {
      const { Popover } = cy.windowHandles;
      Popover.isEager = true;
      cy.get(selectors.popoverTrigger).trigger("mouseover");
      cy.get(selectors.popover).should("be.visible");
    });

    it("should be visible when trigger is hovered and content is hovered after", () => {
      const { Popover } = cy.windowHandles;
      Popover.isEager = true;
      cy.get(selectors.popoverTrigger).trigger("mouseover");
      cy.get(selectors.popover).trigger("mouseover");
      cy.get(selectors.popover).should("be.visible");
    });
  });
});
