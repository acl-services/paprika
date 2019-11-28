describe("Show/hide columns in <DataTable />", () => {
  beforeEach(() => {
    cy.visitStorybook("datatable--show-hide-columns");
  });

  it("shows hide column button in options dropdown base on canHide", () => {
    cy.contains("Name")
      .children()
      .click();
    cy.contains("Hide this column").should("not.exist");

    cy.contains("Goals")
      .children()
      .click();
    cy.contains("Hide this column");
  });

  it("shows column toggle in central control base on canHide", () => {
    cy.contains("Show/hide column").click();
    cy.getByTestId("popover.card")
      .contains("Name")
      .should("not.exist");
    cy.getByTestId("popover.card").contains("Country");
  });

  it("can toggle column visibility by in central control", () => {
    cy.contains("Austria");
    cy.contains("Show/hide column").click();
    cy.getByTestId("popover.card")
      .contains("Country")
      .children('[role="switch"]')
      .click();
    cy.contains("Austria").should("not.exist");
    cy.getByTestId("popover.card")
      .contains("Country")
      .children('[role="switch"]')
      .click();
    cy.contains("Austria");
  });

  it("can hide column by options dropdown", () => {
    cy.contains("805");
    cy.contains("Goals")
      .children()
      .click();
    cy.contains("Hide this column").click();
    cy.contains("805").should("not.exist");
  });
});
