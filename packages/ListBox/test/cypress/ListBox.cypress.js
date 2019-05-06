// function getListBoxTrigger() {
//   cy.get("[data-qa-anchor='trigger']");
// }

const getListBoxTrigger = () => cy.get("[data-qa-anchor='trigger']");

function toggleDropdown() {
  getListBoxTrigger().click();
}

describe("ListBox single select", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox%20%2F%20single", "Filter");
  });

  it("Filters and selects option", () => {
    toggleDropdown();
    cy.get("[data-qa-anchor='list-filter-input']").type("Ven");
    cy.get("[data-qa-anchor='popover-content']")
      .contains(/venom/i)
      .click();
    getListBoxTrigger().should("contain", "Venom");
  });
});

// describe("ListBox single select with getScrollContainer prop", () => {
//   beforeEach(() => {
//     //cy.visit("http://localhost:9009/iframe.html?selectedKind=ListBox%20%2F%20single&selectedStory=Basic");
//     cy.visitStorybook("ListBox%20%2F%20single", "Has%20scroll%20connected%20to%20element");
//   });
//
//   it("should have scroll of target element", () => {
//     toggleDropdown();
//     cy.get("[data-qa-anchor='popover-content']").should("be.visible");
//     cy.scrollTo(0, 500);
//   });
// });
