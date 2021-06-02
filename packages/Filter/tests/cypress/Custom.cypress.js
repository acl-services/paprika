import { getStoryUrlPrefix } from "../../../../.storybook/storyTree";
import { clickListBoxTrigger } from "./helper";

describe("Filter with custom selector", () => {
  it("Should display custom selectors", () => {
    cy.clock();
    cy.visitStorybook(`${getStoryUrlPrefix("Filter")}--custom`);
    cy.findByText("Filter").click();
    cy.findByText("Add filter").click();

    clickListBoxTrigger("filter.item.columnSelector");
    cy.findByText("Level (custom field)").click();

    clickListBoxTrigger("filter.item.ruleSelector");
    cy.findAllByText("is")
      .eq(0)
      .click();

    cy.get("select")
      .select("low")
      .select("mid");
  });
});
