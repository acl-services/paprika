import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Filter with server", () => {
  it("Should display the different filtering options", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--server-side-filter-example`);
    cy.findByText("Filter").click();
    cy.findByText("Add filter").click();
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
    cy.findByText("Filter").click();
    cy.findByText("Add filter").click();
    cy.findAllByTestId("filter.item").should("have.length", 1);

    cy.findByTestId("filter.deleteFilterButton").click();
    cy.findByTestId("filter.item").should("not.exist");
  });

  it("Should switch between and or", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--server-side-filter-example`);
    cy.findByText("Filter").click();
    cy.findByText("Add filter").click();
    cy.findByText("Add filter").click();
    cy.findAllByRole("radio")
      .eq(0)
      .should("be.checked");
    cy.findAllByTestId("filter.item")
      .eq(1)
      .within(() => {
        cy.findByTestId("input").type("1");
      });
    cy.findByText("Apply").click();

    cy.findAllByRole("row").should("have.length", 2);
    cy.findByText("2 filters").click();
    cy.findByText("Or").click();
    cy.findAllByRole("radio")
      .eq(1)
      .should("be.checked");
    cy.findByText("Apply").click();
  });

  it("Should cache changes", () => {
    cy.findByText("2 filters").click();
    cy.findByText("Add filter").click();
    cy.findByText("Cancel").click();

    cy.findByText("2 filters").click();
    cy.findAllByTestId("filter.item").should("have.length", 3);
  });

  it("Should clear", () => {
    cy.findByText("Clear").click();
    cy.findByText("No filters applied to this view");
  });
});
