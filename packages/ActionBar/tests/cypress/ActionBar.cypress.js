import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

function toggleSwitchFor(columnName) {
  cy.findByTestId("sortable").within(() => {
    cy.findByText(columnName)
      .parent()
      .within(() => {
        cy.findByRole("switch").click();
      });
  });
}

beforeEach(() => {
  cy.visitStorybook(`${getStoryUrlPrefix("ActionBar")}--showcase`);
});

afterEach(() => {
  window.localStorage.setItem("paprika-storybook-example--VISIBILITY", "[]");
});

describe("ActionBar", () => {
  it("Should render", () => {
    cy.findByTestId("actionBar.sort.trigger")
      .contains("Sort")
      .should("be.visible");
    cy.findByTestId("actionBar.columnsArrangement.trigger")
      .contains("Arrange")
      .should("be.visible");
  });
});

describe("ActionBar Sort", () => {
  it("should render options within the Sort button", () => {
    cy.findByText("Sort").should("be.visible");
    cy.findAllByTestId("popover.content")
      .eq(0)
      .should("not.be.visible")
      .findByText("Add a field to sort by")
      .should("not.be.visible");
    cy.findAllByTestId("popover.content")
      .eq(0)
      .findByText("Apply")
      .should("not.be.visible");
    cy.findAllByTestId("popover.content")
      .eq(0)
      .findByText("Cancel")
      .should("not.be.visible");

    cy.findByText("Sort").click();
    cy.findAllByTestId("popover.content")
      .eq(0)
      .should("be.visible");
    cy.findByText("Add a field to sort by").should("be.visible");
    cy.findByText("Apply").should("be.visible");
    cy.findByText("Cancel")
      .should("be.visible")
      .click();

    cy.findAllByTestId("popover.content").should("not.be.visible");
  });

  it("should add new sort field by clicking 'Add a field to sort by'", () => {
    cy.findByTestId("sort.sort-field").should("have.length", 0);
    cy.findByText("Sort").click();
    cy.findByText("Add a field to sort by").click();
    cy.findByTestId("sort.sort-field").should("have.length", 1);
  });

  it("should delete sort field by clicking 'X' icon", () => {
    cy.findByTestId("sort.delete-button").should("have.length", 0);
    cy.findByText("Sort").click();
    cy.findByText("Add a field to sort by").click();
    cy.findByTestId("sort.sort-field")
      .should("have.length", 1)
      .findByTestId("sort.delete-button")
      .click();
    cy.findByTestId("sort.delete-button").should("have.length", 0);
  });

  it("should sort according to the selected column and order", () => {
    cy.get("tr")
      .eq(1)
      .should("contain", "805")
      .should("not.contain", "772");
    cy.findByText("Sort").click();
    cy.findByText("Add a field to sort by").click();
    cy.get("select")
      .eq(0)
      .select("Country")
      .should("have.value", "country");
    cy.get("select")
      .eq(1)
      .select("Sort descending (Z → A)")
      .should("have.value", "DESCEND");
    cy.findByText("Apply").click();
    cy.findByTestId("sort.sort-field").should("have.length", 1);
    cy.get("tr")
      .eq(1)
      .should("contain", "772")
      .should("not.contain", "805");
  });
});

describe("ActionBar Arrange Columns", () => {
  it("should render options within the Arrange columns button", () => {
    cy.findByText("Arrange").should("be.visible");
    cy.findAllByTestId("popover.content").should("not.be.visible");
    cy.findAllByPlaceholderText("Search...")
      .eq(1)
      .should("not.be.visible");
    cy.findByText("Hide all").should("not.be.visible");
    cy.findByText("Show all").should("not.be.visible");

    cy.findByText("Arrange").click();
    cy.findAllByTestId("popover.content")
      .eq(1)
      .should("be.visible");
    cy.findAllByPlaceholderText("Search...")
      .eq(1)
      .should("be.visible");
    cy.findByText("Hide all").should("be.visible");
    cy.findByText("Show all").should("be.visible");
  });

  it("should render all columns by clicking 'Show all'", () => {
    cy.get("table")
      .get("th")
      .should("have.length", 9);
    cy.findByText("Arrange").click();
    cy.findByText("Hide all").click();
    cy.get("th").should("have.length", 2);
    cy.findByText("Show all").click();
    cy.get("th").should("have.length", 9);
  });

  it("should filter columns while typing in an input", () => {
    cy.findByText("Arrange").click();
    cy.findAllByTestId("sortable.item").should("have.length", 8);
    cy.findByTestId("actionBar.columnsArrangement.filter")
      .focus()
      .type("Goals");
    cy.findAllByTestId("sortable.item").should("have.length", 1);
  });

  it("should hide column(s) by clicking on its switch", () => {
    cy.get("tr")
      .eq(0)
      .should("contain", "goals");
    cy.findByText("Arrange").click();
    cy.findAllByTestId("switch")
      .eq(0)
      .click();
    cy.get("tr")
      .eq(0)
      .should("not.contain", "goals");
  });

  it("Should hide all columns except the disabled ones", () => {
    cy.findByText("Arrange").click();
    cy.findByText("Hide all").click();
    cy.get("table")
      .should("not.contain", "goals")
      .should("contain", "name")
      .should("not.contain", "status")
      .should("not.contain", "country")
      .should("not.contain", "joined")
      .should("not.contain", "shareable")
      .should("not.contain", "level");
  });

  it("Should drag and drop to change column order", () => {
    cy.findByText("Arrange").click();
    cy.findAllByTestId("sortable.item")
      .eq(3)
      .contains("Country")
      .should("be.visible");
    cy.findAllByTestId("sortable.item")
      .eq(3)
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 72 })
      .wait(100)
      .get('[data-pka-anchor="sortable"]')
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 100 })
      .trigger("mouseup")
      .wait(500);
    cy.findAllByTestId("sortable.item")
      .eq(3)
      .contains("Joined by")
      .should("be.visible");
  });

  it("Should not mess up disabled column order by drag and drop", () => {
    cy.findByText("Arrange").click();
    cy.findAllByTestId("sortable.item")
      .eq(0)
      .contains("Goals")
      .should("be.visible");
    cy.findAllByTestId("sortable.item")
      .eq(0)
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 72 });
    cy.wait(100);
    cy.findByTestId("sortable")
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 100 })
      .trigger("mouseup")
      .wait(500);
    cy.findAllByTestId("sortable.item")
      .eq(0)
      .contains("Goals")
      .should("be.visible");
  });

  it("Should save user preferences for columns arrangement in localStorage", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("ActionBar")}-examples--with-localstorage-enabled`);

    // Show/hide
    cy.findByText("Arrange").click();

    toggleSwitchFor("Status");
    toggleSwitchFor("Level");

    cy.reload();

    cy.findByRole("table").within(() => {
      cy.findByText("Status").should("not.exist");
      cy.findByText("Level").should("not.exist");
    });

    cy.findByText("2 columns hidden").click();
    toggleSwitchFor("Status");

    cy.reload();

    cy.findByRole("table").within(() => {
      cy.findByText("Status").should("be.visible");
      cy.findByText("Level").should("not.exist");
    });

    cy.findByText("1 column hidden").click();
    cy.findByText("Hide all").click();

    cy.reload();

    cy.findAllByRole("columnheader").should("have.length", 2);

    cy.findByText("7 columns hidden").click();
    cy.findByText("Show all").click();

    cy.reload();

    cy.findAllByRole("columnheader").should("have.length", 9);
    cy.findByText("Arrange");

    // Order

    cy.findByText("Arrange").click();
    cy.findAllByTestId("sortable.item")
      .eq(3)
      .trigger("mousedown", { button: 0 })
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 72 })
      .wait(100)
      .get('[data-pka-anchor="sortable"]')
      .trigger("mousemove", { button: 0, clientX: 24, clientY: 100 })
      .trigger("mouseup")
      .wait(500);

    cy.reload();
    cy.findByText("Arrange").click();
    cy.findAllByTestId("sortable.item")
      .eq(3)
      .contains("Joined by")
      .should("be.visible");
  });
});
