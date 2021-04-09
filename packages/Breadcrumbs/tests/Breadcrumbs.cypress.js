describe("<Breadcrumbs />", () => {
  it("Should rerender expand button", () => {
    cy.visitStorybook(`breadcrumbs-tests--rerender-breadcrumbs`);

    cy.findByText("Breadcrumb 1");
    cy.findByText("Breadcrumb 2").should("not.exist");
    cy.findByText("Breadcrumb 3").should("not.exist");
    cy.findByText("Breadcrumb 4").should("not.exist");

    cy.findByText("Click me").click();

    cy.findByText("Breadcrumb 2").should("not.be.visible");
    cy.findByText("Breadcrumb 3").should("be.visible");
    cy.findByText("Breadcrumb 4").should("be.visible");

    cy.findByLabelText("Show all breadcrumb items.").click();
    cy.findByText("Breadcrumb 2").should("be.visible");
  });
});
