describe("<CheckBox />", () => {
  before(() => {});

  it("should be checked when you click the checkbox", () => {
    cy.visitStorybook("checkbox-automation-tests--cypress");
    cy.get("label").click();
    cy.get("label").click();
  });
});
