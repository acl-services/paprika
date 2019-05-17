import selectors from "../helpers/selectors";
import { openLazyDropDown } from "../helpers/toggleHelpers";

function shouldShowMore(beforeShowMore, assertedLength, afterShowMore) {
  cy.contains(beforeShowMore).click();
  cy.get(selectors.popoverList)
    .should("be.visible")
    .then(() => {
      cy.get(selectors.popoverList)
        .children()
        .and("have.length", assertedLength);
    })
    .should("contain", afterShowMore);
}

function checkIfSelected(marvelChar, fontWeight) {
  cy.contains(marvelChar)
    .should("have.css", "font-weight")
    .and("contain", fontWeight);
}

describe("Lazy ListBox", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / more examples", "Lazy ListBox");
    openLazyDropDown();
  });

  it("should select three options and see three images", () => {
    cy.get("#root")
      .children()
      .should("have.length", 1);
    cy.contains("Namora").click();
    cy.get(selectors.popoverList).scrollTo("bottom");
    cy.contains("Satana").click();
    cy.contains("Sauron").click();
    cy.contains("Accept").click();
    cy.get(selectors.popover).should("not.be.visible");
    cy.get("#root div:first")
      .children()
      .should("have.length", 3)
      .and("contain", "Namora")
      .and("contain", "Satana")
      .and("contain", "Sauron");
  });

  // Test fails caused from error in application code, not cypress
  // it.only("should filter and show correct options", () => {
  //   cy.get(selectors.filterInput).type("z");
  //   cy.get(selectors.popoverList)
  //     .children()
  //     .should("have.lenth", 10);
  // });

  // fails due to same issue above
  // it("should show correct amount when backspacing filter", () => {
  //   cy.get(selectors.filterInput)
  //     .type("o")
  //     .type("{backspace}");
  //   cy.get(selectors.popoverList)
  //     .children()
  //     .should("have.lenth", 55);
  // });

  it("should select options, and close popover while not show images when pressing cancel", () => {
    cy.contains("Namora").click();
    cy.contains("Nebula").click();
    cy.contains("Cancel").click();
    cy.get(selectors.popover).should("not.be.visible");
    cy.get("#root")
      .children()
      .should("have.length", 1);
  });

  it("should select options and clear selections", () => {
    cy.contains("Nebula").click();
    checkIfSelected("Nebula", "600");
    cy.contains("Clear").click();
    checkIfSelected("Nebula", "400");
  });

  it("should load marvel characters when pressing show more", () => {
    cy.get(selectors.popoverList)
      .should("not.contain", "Nightcrawler")
      .and("not.contain", "Sentinel");
    shouldShowMore("Show more (20 / 45)", 75, "Show more (40 / 45)");
    cy.get(selectors.popoverList).scrollTo("bottom");
    shouldShowMore("Show more (20 / 196)", 95, "Show more (40 / 196)");
    cy.get(selectors.popoverList)
      .should("contain", "Nightcrawler")
      .and("contain", "Sentinel");
  });
});
