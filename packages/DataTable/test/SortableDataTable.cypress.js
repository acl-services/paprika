describe("Sortable <DataTable />", () => {
  beforeEach(() => {
    cy.visitStorybook("datatable--sortable-datatable");
  });

  const getByCellIndex = cellIndex => cy.get(`[data-pka-cell-index="${cellIndex}"]`);

  it("shows data by original order", () => {
    getByCellIndex("0_1").contains("Josef");
    getByCellIndex("1_1").contains("Romário");
    getByCellIndex("2_1").contains("Pelé");
  });

  it("has multiple options in sorting panel inside the central control", () => {
    cy.contains("Sort").click();
    cy.contains("Sort Country by").should("not.exist");
    cy.contains("Sort Name by").contains("ASCEND");
    cy.contains("Sort Name by")
      .contains("DESCEND")
      .should("not.exist");
    cy.contains("Sort Goals by").contains("ASCEND");
    cy.contains("Sort Goals by").contains("DESCEND");
    cy.contains("Sort Status by").contains("ASCEND");
    cy.contains("Sort Status by").contains("DESCEND");
  });

  it("can sort by ASCEND", () => {
    cy.contains("Sort").click();
    cy.contains("Sort Name by")
      .contains("ASCEND")
      .click();

    getByCellIndex("0_1").contains("Alfredo");
    getByCellIndex("1_1").contains("Arthur");
    getByCellIndex("2_1").contains("Cristiano");
  });

  it("can sort by DESCEND", () => {
    cy.contains("Sort").click();
    cy.contains("Sort Goals by")
      .contains("DESCEND")
      .click();

    getByCellIndex("0_2").contains("805");
    getByCellIndex("1_2").contains("772");
    getByCellIndex("2_2").contains("767");
  });
});
