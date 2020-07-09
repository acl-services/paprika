import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

const baseStory = `${getStoryUrlPrefix("Sortable")}-backyard-tests`;
const testStory = "cypress";

const selector = {
  root: "[data-pka-anchor='sortable']",
  item: "[data-pka-anchor='sortable.item']",
  remove: "[data-pka-anchor='sortable.item.remove']",
};
const keyEvent = {
  space: { keyCode: 32, force: true },
  down: { keyCode: 40, force: true },
};
const dragOffset = { clientX: 24, clientY: 72 };
const animationDelay = 200;

describe("<Sortable />", () => {
  beforeEach(() => {
    cy.visitStorybook(`${baseStory}--${testStory}`);
  });

  it("should be re-orderable by mouse", () => {
    cy.get(selector.item)
      .first()
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { button: 0, ...dragOffset })
      .wait(animationDelay);
    cy.get(selector.root)
      .trigger("mousemove", { button: 0, ...dragOffset, clientY: 100 })
      .trigger("mouseup")
      .wait(animationDelay * 2);
    cy.get(selector.item)
      .eq(1)
      .contains("Lorem")
      .should("be.visible");
  });

  it("should ignore out-of-bounds drops", () => {
    cy.get(selector.item)
      .first()
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { button: 0, ...dragOffset })
      .wait(animationDelay);
    cy.get(selector.root)
      .trigger("mousemove", { button: 0, ...dragOffset, clientY: 400 })
      .trigger("mouseup")
      .wait(animationDelay * 2);
    cy.get(selector.item)
      .first()
      .contains("Lorem")
      .should("be.visible");
  });

  it("should be re-orderable by keyboard", () => {
    cy.get(selector.item)
      .first()
      .trigger("keydown", keyEvent.space)
      .trigger("keydown", keyEvent.down)
      .wait(animationDelay)
      .trigger("keydown", keyEvent.space);
    cy.get(selector.item)
      .eq(1)
      .contains("Lorem")
      .should("be.visible");
  });

  it("should allow items to be removed", () => {
    cy.get(selector.item)
      .first()
      .find(selector.remove)
      .click();
    cy.get(selector.item)
      .first()
      .contains("Lorem")
      .should("be.not.visible");
  });
});
