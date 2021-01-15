import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Filter with server", () => {
  it("Should display the different filtering options", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--server-side-filter-example`);
    cy.getByText("Filter").click();
    cy.getByText("Add filter").click();
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
      .select("mid");
    cy.get("select")
      .eq(1)
      .select("is not")
      .get("select")
      .eq(2)
      .select("low")
      .select("mid");
  });

  it("should add filter and delete filter", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--server-side-filter-example`);
    cy.getByText("Filter").click();
    cy.getByText("Add filter").click();
    cy.getByTestId("filter.item").should("have.length", 1);

    cy.getByTestId("filter.deleteFilterButton").click();
    cy.getByTestId("filter.item").should("have.length", 0);
  });

  it("Should switch between and or", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--server-side-filter-example`);
    cy.getByText("Filter").click();
    cy.getByText("Add filter").click();
    cy.getByText("Add filter").click();
    cy.getAllByRole("radio")
      .eq(0)
      .should("be.checked");
    cy.getByTestId("filter.item")
      .eq(1)
      .within(() => {
        cy.getByTestId("input").type("1");
      });
    cy.getByText("Apply").click();

    cy.getAllByRole("row").should("have.length", 2);
    cy.getByText("2 filters").click();
    cy.getByText("Or").click();
    cy.getAllByRole("radio")
      .eq(1)
      .should("be.checked");
    cy.getByText("Apply").click();
  });

  it("Should cache changes", () => {
    cy.getByText("2 filters").click();
    cy.getByText("Add filter").click();
    cy.getByText("Cancel").click();

    cy.getByText("2 filters").click();
    cy.getByTestId("filter.item").should("have.length", 3);
  });

  it("Should clear", () => {
    cy.getByText("Clear").click();
    cy.getByText("No filters applied to this view");
  });
});
