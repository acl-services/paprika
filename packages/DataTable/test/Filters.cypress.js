describe("<DataTable /> with filters", () => {
  beforeEach(() => {
    cy.visitStorybook("datatable--datatable-with-filters");
  });

  const getByCellIndex = cellIndex => cy.get(`[data-pka-cell-index="${cellIndex}"]`);

  it("shows data by original order", () => {
    getByCellIndex("0_1").contains("Josef");
    getByCellIndex("1_1").contains("Romário");
    getByCellIndex("2_1").contains("Pelé");
  });

  it("can add a filter in popover", () => {
    cy.contains(/add filter/i).click();
    cy.getByTestId("filter.filter-item").contains(/country/i);
    cy.getByTestId("filter.filter-item").contains(/is/i);
  });

  it("can add a filter in options", () => {
    cy.contains(/status/i)
      .find('[role="button"]')
      .click({ force: true });

    cy.contains(/add filter for this column/i).click();
    cy.getByTestId("filter.filter-item").contains(/status/i);
    cy.getByTestId("filter.filter-item").contains(/is/i);
  });

  it("can delete a filter", () => {
    cy.contains(/add filter/i).click();
    cy.contains(/status/i)
      .find('[role="button"]')
      .click({ force: true });
    cy.contains(/add filter for this column/i).click();

    cy.getByTestId("filter.filter-item").contains(/country/i);
    cy.getByTestId("filter.filter-item").contains(/status/i);

    cy.getByTestId("filter.delete-button").click({ multiple: true });

    cy.getByTestId("filter.filter-item")
      .contains(/country/i)
      .should("not.exist");
    cy.getByTestId("filter.filter-item")
      .contains(/status/i)
      .should("not.exist");
  });

  it("works with different condition", () => {
    cy.contains(/add filter/i).click();
    cy.contains(/status/i)
      .find('[role="button"]')
      .click({ force: true });
    cy.contains(/add filter for this column/i).click();

    cy.getByTestId("filter.filter-item")
      .find('input[type="text"]')
      .eq(0)
      .type("Brazil");

    cy.getByTestId("filter.filter-item")
      .find('input[type="text"]')
      .eq(1)
      .type("Active");

    getByCellIndex("0_1").should("not.exist");

    cy.get("fieldset")
      .find('[type="radio"]')
      .eq(1)
      .click();

    getByCellIndex("0_1").contains("Romário");
  });
});
