beforeEach(() => {
  cy.visitStorybook("action-bar--showcase");
});

describe("ActionBar", () => {
  it("should render options within the Filter button", () => {
    cy.getByText("Filter")
      .should("be.visible")
      .getByTestId("popover.content")
      .should("not.be.visible")
      .getByText("Add a field to filter by")
      .should("not.be.visible")
      .getAllByText("Apply")
      .should("not.be.visible")
      .getAllByText("Cancel")
      .should("not.be.visible");

    cy.getByText("Filter")
      .click()
      .getByTestId("popover.content")
      .should("be.visible")
      .getByText("Add a field to filter by")
      .should("be.visible")
      .getAllByText("Apply")
      .eq(0)
      .should("be.visible")
      .getAllByText("Cancel")
      .eq(0)
      .should("be.visible")
      .click();
  });

  it("should add new filter item by clicking 'Add a field to filter by'", () => {
    cy.getByTestId("actionBar.filter.filterItem").should("have.length", 0);
    cy.getByText("Filter")
      .click()
      .getByText("Add a field to filter by")
      .click();
    cy.getByTestId("actionBar.filter.filterItem").should("have.length", 1);
  });
});

describe("ActionBar Sort", () => {
  it("should render options within the Sort button", () => {
    cy.getByText("Sort")
      .should("be.visible")
      .getByTestId("popover.content")
      .should("not.be.visible")
      .getByText("Add a field to sort by")
      .should("not.be.visible")
      .getAllByText("Apply")
      .should("not.be.visible")
      .getAllByText("Cancel")
      .should("not.be.visible");

    cy.getByText("Sort")
      .click()
      .getByTestId("popover.content")
      .should("be.visible")
      .getByText("Add a field to sort by")
      .should("be.visible")
      .getAllByText("Apply")
      .eq(1)
      .should("be.visible")
      .getAllByText("Cancel")
      .eq(1)
      .should("be.visible")
      .click();

    cy.getByTestId("popover.content").should("not.be.visible");
  });

  it("should add new sort field by clicking 'Add a field to sort by'", () => {
    cy.getByTestId("sort.sort-field").should("have.length", 0);
    cy.getByText("Sort")
      .click()
      .getByText("Add a field to sort by")
      .click();
    cy.getByTestId("sort.sort-field").should("have.length", 1);
  });

  it("should delete sort field by clicking 'X' icon", () => {
    cy.getByTestId("sort.delete-button")
      .should("have.length", 0)
      .getByText("Sort")
      .click()
      .getByText("Add a field to sort by")
      .click()
      .getByTestId("sort.sort-field")
      .should("have.length", 1)
      .getByTestId("sort.delete-button")
      .click()
      .getByTestId("sort.delete-button")
      .should("have.length", 0);
  });

  it("should sort according to the selected column and order", () => {
    cy.get("tr")
      .eq(1)
      .should("contain", "805")
      .should("not.contain", "772")
      .getByText("Sort")
      .click()
      .getByText("Add a field to sort by")
      .click()
      .get("select")
      .eq(0)
      .select("Country")
      .should("have.value", "country")
      .get("select")
      .eq(1)
      .select("Sort descending (Z → A)")
      .should("have.value", "DESCEND")
      .getAllByText("Apply")
      .eq(1)
      .click()
      .getByTestId("sort.sort-field")
      .should("have.length", 1)
      .get("tr")
      .eq(1)
      .should("contain", "772")
      .should("not.contain", "805");
  });
});

describe("ActionBar Arrange Columns", () => {
  it("should render options within the Arrange columns button", () => {
    cy.getByText("Arrange columns")
      .should("be.visible")
      .getByTestId("popover.content")
      .should("not.be.visible")
      .getByPlaceholderText(/Filter/i)
      .should("not.be.visible")
      .getByText("Hide all")
      .should("not.be.visible")
      .getByText("Show all")
      .should("not.be.visible");

    cy.getByText("Arrange columns")
      .click()
      .getByTestId("popover.content")
      .should("be.visible")
      .getByPlaceholderText(/Filter/i)
      .should("be.visible")
      .getByText("Hide all")
      .should("be.visible")
      .getByText("Show all")
      .should("be.visible");
  });

  it("should render all columns by clicking 'Show all'", () => {
    cy.get("table")
      .get("th")
      .should("have.length", 8)
      .getByText("Arrange columns")
      .click()
      .getByText("Hide all")
      .click()
      .get("th")
      .should("have.length", 1)
      .getByText("Show all")
      .click()
      .get("th")
      .should("have.length", 8);
  });

  it("should filter columns while typing in an input", () => {
    cy.getByText("Arrange columns")
      .click()
      .getByTestId("sortable.item")
      .should("have.length", 7)
      .get("input")
      .type("Goals")
      .getByTestId("sortable.item")
      .should("have.length", 1);
  });

  it("should hide column(s) by clicking on its switch", () => {
    cy.get("tr")
      .eq(0)
      .should("contain", "goals")
      .getByText("Arrange columns")
      .click()
      .getByTestId("switch")
      .eq(0)
      .click()
      .get("tr")
      .eq(0)
      .should("not.contain", "goals");
  });
});
