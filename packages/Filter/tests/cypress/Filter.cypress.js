import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";

describe("Filter", () => {
  it("Should display the different filtering options", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--showcase`);
    cy.getByText("1 filter").click();
    cy.get("select")
      .eq(0)
      .select("Goals")
      .select("Name")
      .select("Status")
      .select("Country")
      .select("Joined by")
      .select("Shareable")
      .select("Position");
    cy.get("select")
      .eq(1)
      .select("is")
      .get("select")
      .eq(2)
      .select("striker")
      .select("midfielder");
    cy.get("select")
      .eq(1)
      .select("is not")
      .get("select")
      .eq(2)
      .select("striker")
      .select("midfielder");
  });

  it("should add filter and delete filter", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--showcase`);
    cy.getByText("1 filter").click();
    cy.getByText("Add filter").click();
    cy.getByTestId("filter.item").should("have.length", 2);

    cy.getByTestId("filter.deleteFilterButton")
      .eq(0)
      .click();
    cy.getByTestId("filter.item").should("have.length", 1);
  });

  it("Should switch between and or", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--showcase`);
    cy.getByText("1 filter").click();
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

    cy.getAllByRole("row").should("have.length", 1);
    cy.getByText("2 filters").click();
    cy.getByText("Or").click();
    cy.getAllByRole("radio")
      .eq(1)
      .should("be.checked");
    cy.getByText("Apply").click();
    cy.getAllByRole("row").should("have.length", 2);
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
    cy.getAllByRole("row").should("have.length", 4);
    cy.getByText("No filters applied to this view");
  });
});
