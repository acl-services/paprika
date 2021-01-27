import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import { clickListBoxTrigger } from "./helper";

describe("Filter", () => {
  it("Should display the different filtering options", () => {
    cy.clock();
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--showcase`);
    cy.getByText("1 filtered").click();

    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Goals").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Status").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Country").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Joined by").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Shareable").click();
    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Position").click();

    clickListBoxTrigger("filter.item.ruleSelector");
    cy.findByText("is not").click();
    clickListBoxTrigger("filter.item.ruleSelector");
    cy.findByText("is not blank").click();
    clickListBoxTrigger("filter.item.ruleSelector");
    cy.findByText("is").click();

    clickListBoxTrigger("filter.item.valueInput");
    cy.findByText("midfielder").click();
  });

  it("should add filter and delete filter", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--showcase`);
    cy.getByText("1 filtered").click();
    cy.getByText("Add filter").click();
    cy.getByTestId("filter.item").should("have.length", 2);

    cy.findAllByTestId("filter.deleteFilterButton")
      .eq(0)
      .click();
    cy.findAllByTestId("filter.item").should("have.length", 1);
  });

  it("Should switch between and or", () => {
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--showcase`);
    cy.getByText("1 filtered").click();
    cy.getByText("Add filter").click();
    cy.getAllByRole("radio")
      .eq(0)
      .should("be.checked");
    cy.findAllByTestId("filter.item")
      .eq(1)
      .within(() => {
        cy.getByTestId("filter.item.valueInput").type("1");
      });
    cy.findByText("Apply").click();

    cy.getAllByRole("row").should("have.length", 1);
    cy.getByText("2 filtered").click();
    cy.getByText("Or").click();
    cy.getAllByRole("radio")
      .eq(1)
      .should("be.checked");
    cy.findByText("Apply").click();
    cy.findAllByRole("row").should("have.length", 2);
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
    cy.findAllByRole("row").should("have.length", 4);
    cy.findByText("No filters applied to this view");
  });
});
