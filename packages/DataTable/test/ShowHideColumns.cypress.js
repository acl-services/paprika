describe("Show/hide columns in <DataTable />", () => {
  beforeEach(() => {
    cy.visitStorybook("datatable--show-hide-columns");
  });

  it("shows hide column button in options dropdown base on canHide", () => {
    cy.contains(/Name/i)
      .find('[role="button"]')
      .click({ force: true });

    cy.contains("Hide this column").should("not.exist");

    cy.contains(/Goals/i)
      .find('[role="button"]')
      .click({ force: true });

    cy.contains("Hide this column");
  });

  it("shows column toggle in central control base on canHide", () => {
    cy.contains("Show/hide column").click();
    cy.getByTestId("popover.card")
      .contains(/Name/i)
      .children('[role="switch"]')
      .click();
    cy.contains("Josef Bican");
    cy.getByTestId("popover.card").contains(/Country/i);
  });

  it("can toggle column visibility by in central control", () => {
    cy.contains(/Austria/i);
    cy.contains("Show/hide column").click();
    cy.getByTestId("popover.card")
      .contains(/Country/i)
      .children('[role="switch"]')
      .click();
    cy.contains(/Austria/i).should("not.exist");
    cy.getByTestId("popover.card")
      .contains(/Country/i)
      .children('[role="switch"]')
      .click();
    cy.contains(/Austria/i);
  });

  it("can hide column by options dropdown", () => {
    cy.contains("805");

    // is catching cypress with the wrong dom representation
    // can't perform search like the one with .find("[role=button]")
    // adding wait aliviate the problem
    cy.wait(0);
    cy.contains(/Goals/i)
      .find('[role="button"]')
      .click({ force: true });

    cy.contains("Hide this column").click();
    cy.contains("805").should("not.exist");
  });

  it("renders re-ordered columns", () => {
    const keyEvent = {
      space: { keyCode: 32, force: true },
      down: { keyCode: 40, force: true },
    };
    const getByCellIndex = cellIndex => cy.get(`[data-pka-cell-index="${cellIndex}"]`);
    getByCellIndex("0_0").contains("Austria");
    getByCellIndex("0_1").contains("Josef Bican");
    getByCellIndex("0_2").contains("805");
    getByCellIndex("0_3").contains("inactive");
    getByCellIndex("0_4").contains("December 12, 2019");
    cy.get("[data-pka-anchor='sortable.item']")
      .first()
      .trigger("keydown", keyEvent.space)
      .trigger("keydown", keyEvent.down)
      .trigger("keydown", keyEvent.space)
      .wait(400);
    getByCellIndex("0_0").contains("Josef Bican");
    getByCellIndex("0_1").contains("Austria");
    getByCellIndex("0_2").contains("805");
    getByCellIndex("0_3").contains("inactive");
    getByCellIndex("0_4").contains("December 12, 2019");
  });
});
