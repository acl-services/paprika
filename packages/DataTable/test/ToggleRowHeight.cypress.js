describe("Toggle row height in <DataTable />", () => {
  beforeEach(() => {
    cy.visitStorybook("datatable--navigation");
  });

  it("toggles row height", () => {
    cy.get('[role="row"]').should("have.css", "height", "32px");
    cy.contains("Row height").click();
    cy.get('[role="row"]').should("have.css", "height", "55px");
    cy.contains("Row height").click();
    cy.get('[role="row"]').should("have.css", "height", "87px");
  });
});
