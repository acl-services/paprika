import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import { clickListBoxTrigger } from "./helper";

describe("Filter with server", () => {
  it("Should display the different filtering options", () => {
    cy.clock();
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--server-side-filter-example`);
    cy.getByText("Filter").click();
    cy.getByText("Add filter").click();

    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Name").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Status").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Country").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Joined by").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Shareable").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Level").click();

    clickListBoxTrigger("filter.item.ruleSelector");
    cy.findByText("is not").click();

    cy.get("select")
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
        cy.getByTestId("filter.item.valueInput").type("1");
      });
    cy.findByText("Apply").click();

    cy.getAllByRole("row").should("have.length", 2);
    cy.getByText("2 filtered").click();
    cy.getByText("Or").click();
    cy.getAllByRole("radio")
      .eq(1)
      .should("be.checked");
    cy.findByText("Apply").click();
  });

  it("Should cache changes", () => {
    cy.getByText("2 filtered").click();
    cy.getByText("Add filter").click();
    cy.getByText("Cancel").click();

    cy.getByText("2 filtered").click();
    cy.getByTestId("filter.item").should("have.length", 3);
  });

  it("Should clear", () => {
    cy.findByText("Clear").click();
    cy.findByText("No filters applied to this view");
  });
});
