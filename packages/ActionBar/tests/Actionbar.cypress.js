describe("ActionBar", () => {
  beforeEach(() => {
    cy.visitStorybook("action-bar--showcase");
  });

  it("Should render", () => {
    cy.get("span")
      .contains("Filter")
      .should("be.visible");
    cy.get("span")
      .contains("Sort")
      .should("be.visible");
    cy.get("span")
      .contains("Arrange")
      .should("be.visible");
  });

  it("Should display the differant filtering options", () => {
    cy.get("span")
      .contains("Filter")
      .click();
    cy.contains("Add a field to filter by").click();
    cy.get("select")
      .eq(0)
      .select("Goals")
      .select("Name")
      .select("Status")
      .select("Country")
      .select("Joined by")
      .select("Shareable")
      .select("Level");
    cy.get("select")
      .eq(1)
      .select("is")
      .get("select")
      .eq(2)
      .select("low")
      .select("mid")
      .select("high");
    cy.get("select")
      .eq(1)
      .select("is not")
      .get("select")
      .eq(2)
      .select("low")
      .select("mid")
      .select("high");
    cy.get("select")
      .eq(1)
      .select("is empty")
      .select("is not empty");
  });

  it("Should filter the table ", () => {
    cy.get("span")
      .contains("Filter")
      .click();
    cy.contains("Add a field to filter by").click();
    cy.get("input")
      .eq(0)
      .type("805");
    cy.contains("Apply").click();
    cy.contains("805").should("be.visible");
    cy.contains("772").should("not.be.visible");
    cy.contains("767").should("not.be.visible");
  });

  it("Should hide all columns", () => {
    cy.contains("Arrange columns").click();
    cy.contains("Hide all").click();
    cy.contains("goals").should("not.be.visible");
    cy.contains("name").should("not.be.visible");
    cy.contains("status").should("not.be.visible");
    cy.contains("country").should("not.be.visible");
    cy.contains("joined").should("not.be.visible");
    cy.contains("shareable").should("not.be.visible");
    cy.contains("level").should("not.be.visible");
  });

  it.only("Should drag and drop to change column order", () => {
    cy.contains("Arrange columns").click();
    cy.get("[data-pka-anchor='sortable.item']")
      .first()
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { clientX: 24, clientY: 72 })
      .wait(100)
      .get('[data-pka-anchor="sortable"]')
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 100 })
      .trigger("mouseup")
      .wait(200);
    cy.get('[data-pka-anchor="sortable.item"]')
      .eq(1)
      .contains("Goals")
      .should("be.visible");
  });
});
