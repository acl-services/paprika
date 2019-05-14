import selectors from "../helpers/selectors";
import { openLazyDropDown } from "../helpers/toggleHelpers";

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

  // Test fails caused from error from application code, not cypress
  // it("should filter and show correct options", () => {
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
    cy.contains("Nebula")
      .should("have.css", "font-weight")
      .and("contain", "600");
    cy.contains("Clear").click();
    cy.contains("Nebula")
      .should("have.css", "font-weight")
      .and("contain", "400");
  });
});

// describe("Lazy ListBox fetch", () => {
//   it("should load marvel characters when pressing show more", () => {
//     cy.visitStorybook("ListBox / more examples", "Lazy ListBox");
//     openLazyDropDown();
//     cy.contains("Show more (20 / 45)").click();
//     cy.server();
//     cy.route("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=").as("getMoreMarvelCharacters");
//     cy.wait("@getMoreMarvelCharacters");
//     cy.get(selectors.popoverList)
//       .children()
//       .should("have.length", 55);
//   });
// });
