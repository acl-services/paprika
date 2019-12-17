describe("Using localStorage memorize data table", () => {
  before(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    cy.visitStorybook("datatable--memorized-table-navigation");
  });

  const getByCellIndex = cellIndex => cy.get(`[data-pka-cell-index="${cellIndex}"]`);

  it("shows initial navigation state and default data", () => {
    cy.get("fieldset")
      .find('[type="radio"]')
      .eq(0)
      .should("be.checked");
    cy.queryByTestId("filter.delete-button").should("not.exist");
    cy.getByTestId("button").contains(/^sort$/i);

    getByCellIndex("0_0").contains("Austria");
    getByCellIndex("0_1").contains("Josef");
    getByCellIndex("0_3").contains("inactive");
    getByCellIndex("0_4").contains("12/12/2019");
    getByCellIndex("1_0").contains("Brazil");
    getByCellIndex("2_0").contains("Brazil");
    getByCellIndex("0_2").contains("805");
    getByCellIndex("1_2").contains("772");
    getByCellIndex("2_2").contains("767");
  });

  it.only("stores the navigation state", () => {
    cy.get("fieldset")
      .find('[type="radio"]')
      .eq(1)
      .click();

    cy.contains(/goals/i)
      .find('[role="button"]')
      .click({ force: true });
    cy.contains(/add filter for this column/i).click();

    cy.getByTestId("filter.filter-item")
      .find('input[type="text"]')
      .eq(0)
      .type("557");

    cy.contains(/name/i)
      .find('[role="button"]')
      .click({ force: true });
    cy.contains(/add filter for this column/i).click();
    cy.getByTestId("filter.filter-item")
      .find("select")
      .eq(3)
      .select("CONTAINS");
    cy.getByTestId("filter.filter-item")
      .find('input[type="text"]')
      .eq(1)
      .type("ar");

    cy.contains(/Status/i)
      .find('[role="button"]')
      .click({ force: true });

    cy.contains("Hide this column").click();

    const keyEvent = {
      space: { keyCode: 32, force: true },
      down: { keyCode: 40, force: true },
    };
    cy.get("[data-pka-anchor='sortable.item']")
      .first()
      .trigger("keydown", keyEvent.space)
      .trigger("keydown", keyEvent.down)
      .trigger("keydown", keyEvent.space)
      .wait(400);

    getByCellIndex("0_0").contains("Maravilha");
    getByCellIndex("0_1").contains("Brazil");
    getByCellIndex("0_2").contains("575");
    getByCellIndex("0_3").contains("09/28/2014");

    cy.reload();

    getByCellIndex("0_0").contains("Maravilha");
    getByCellIndex("0_1").contains("Brazil");
    getByCellIndex("0_2").contains("575");
    getByCellIndex("0_3").contains("09/28/2014");
  });
});
