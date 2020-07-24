import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

beforeEach(() => {
  cy.visitStorybook(`${getStoryUrlPrefix("ActionBar")}--showcase`);
});

describe("ActionBar", () => {
  it("Should render", () => {
    cy.getByTestId("raw-button")
      .contains("Filter")
      .should("be.visible");
    cy.getByTestId("raw-button")
      .contains("Sort")
      .should("be.visible");
    cy.getByTestId("raw-button")
      .contains("Arrange")
      .should("be.visible");
  });
});

describe("ActionBar Filter", () => {
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

  it("Should display the differant filtering options", () => {
    cy.getByTestId("raw-button")
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

  it("should add new filter item by clicking 'Add a field to filter by'", () => {
    cy.getByTestId("actionBar.filter.filterItem").should("have.length", 0);
    cy.getByText("Filter")
      .click()
      .getByText("Add a field to filter by")
      .click();
    cy.getByTestId("actionBar.filter.filterItem").should("have.length", 1);
  });

  it("Should filter the table ", () => {
    cy.getByTestId("raw-button")
      .contains("Filter")
      .click();
    cy.contains("Add a field to filter by").click();
    cy.getByTestId("actionBar.filter.ruleSelector").select("GREATER_THAN");
    cy.get("input")
      .eq(0)
      .type("800");
    cy.contains("Apply").click();
    cy.contains("805").should("be.visible");
    cy.contains("772").should("not.be.visible");
    cy.contains("767").should("not.be.visible");
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
      .should("have.length", 9)
      .getByText("Arrange columns")
      .click()
      .getByText("Hide all")
      .click()
      .get("th")
      .should("have.length", 1)
      .getByText("Show all")
      .click()
      .get("th")
      .should("have.length", 9);
  });

  it("should filter columns while typing in an input", () => {
    cy.getByText("Arrange columns")
      .click()
      .getByTestId("sortable.item")
      .should("have.length", 8)
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

  it("Should drag and drop to change column order", () => {
    cy.contains("Arrange columns").click();
    cy.get("[data-pka-anchor='sortable.item']")
      .first()
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 72 })
      .wait(100)
      .get('[data-pka-anchor="sortable"]')
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 100 })
      .trigger("mouseup")
      .wait(500);
    cy.get('[data-pka-anchor="sortable.item"]')
      .eq(1)
      .contains("Goals")
      .should("be.visible");
  });
});
