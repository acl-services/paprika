describe("Using back-end with <DataTable />", () => {
  beforeEach(() => {
    cy.visitStorybook("datatable--sortable-datatable-back-end");
  });

  const getByCellIndex = cellIndex => cy.get(`[data-pka-cell-index="${cellIndex}"]`);

  it("shows correct loading state", () => {
    cy.contains("Loading");
    getByCellIndex("0_0").contains("Austria");
    cy.contains("Loading").should("not.exist");
  });

  it("sorts by back-end", () => {
    getByCellIndex("0_0").contains("Austria");
    getByCellIndex("0_1").contains("Josef");
    getByCellIndex("1_1").contains("Romário");
    getByCellIndex("2_1").contains("Pelé");

    cy.contains("Name")
      .children()
      .click();
    cy.contains("Sort by ASCEND").click();
    cy.contains("Loading");
    getByCellIndex("0_1").contains("Alfredo");
    getByCellIndex("1_1").contains("Arthur");
    getByCellIndex("2_1").contains("Cristiano");
    cy.contains("Loading").should("not.exist");
  });
});
