import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

const baseStory = `${getStoryUrlPrefix("Tabs")}-backyard-tests`;
const testStory = "cypress";

describe("<Tabs />", () => {
  beforeEach(() => {
    cy.visitStorybook(`${baseStory}--${testStory}`);
  });

  it("elements inside panel are focused if focussable", () => {
    cy.getByText(/Hello/i)
      .tab()
      .focused()
      .contains(/Focus test inside Tabs.Panel/i)
      .tab()
      .focused()
      .contains(/Focus test outside Tabs/i);
  });

  it("tabs can be focused with left and right arrow keys", () => {
    cy.getByText(/Hello/i)
      .trigger("keydown", { keyCode: 39, which: 39 })
      .focused()
      .contains(/World/i)
      .trigger("keydown", { keyCode: 39, which: 39 })
      .focused()
      .contains(/ABC/i)
      .trigger("keydown", { keyCode: 37, which: 37 })
      .focused()
      .contains(/World/i);
  });

  it("tabs can be navigated with left and right arrow keys", () => {
    cy.getByText(/Hello/i)
      .trigger("keydown", { keyCode: 39, which: 39 })
      .focused()
      .contains(/World/i)
      .click()
      .getByText(/World Tab/i)
      .should("be.visible");
  });

  it("clicking home key will go to first available tab", () => {
    cy.getByText(/World/i)
      .click()
      .trigger("keydown", { keyCode: 36, which: 36 })
      .focused()
      .contains(/Hello/i);
  });

  it("clicking end key will go to last available tab", () => {
    cy.getByText(/Hello/i)
      .trigger("keydown", { keyCode: 35, which: 35 })
      .focused()
      .contains(/ABC/i);
  });
});
