describe("FormElement", () => {
  it("label help visible when form inside Popover", () => {
    cy.visitStorybook(`forms-formelement-examples--label-with-help-inside-panel`);
    cy.get('[data-pka-anchor="form-element.help"]')
      .children()
      .click();
    cy.contains("Some help text").should("be.visible");
  });
});
