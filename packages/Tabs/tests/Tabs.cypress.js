const baseStory = "tabs-automation-tests";
const testStory = "cypress";

describe("<Tabs />", () => {
  beforeEach(() => {
    cy.visitStorybook(`${baseStory}--${testStory}`);
  });

  // TODO: Fix test
  it("should be navigitable with tabbing", () => {
    cy.getByText(/Hello/i)
      .tab()
      .click();

    cy.getByText(/World Tab/i).should("be.visible");

    cy.focused()
      .tab()
      .click();

    cy.getByText(/ABC Tab/i).should("be.visible");
  });
});
