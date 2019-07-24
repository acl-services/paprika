const baseStory = "tabs-automation-tests";
const testStory = "cypress";

describe("<Tabs />", () => {
  beforeEach(() => {
    cy.visitStorybook(`${baseStory}--${testStory}`);
  });

  it("should be keyboard accessible via tabbing", () => {
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
