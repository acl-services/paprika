// function getListBoxTrigger() {
//   cy.get("[data-qa-anchor='trigger']");
// }

const getFilterInput = () => cy.get("[data-qa-anchor='list-filter-input']");

const getPopoverContent = () => cy.get("[data-qa-anchor='popover-content']");

const getPopoverList = () => cy.get("[data-qa-anchor='styled-list']");

const getClearButton = () => cy.get("[data-qa-anchor='clear-button']");

const getListBoxTrigger = () => cy.get("[data-qa-anchor='trigger']");

function toggleDropdown() {
  getListBoxTrigger().click();
}

describe("ListBox single select", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Basic");
    toggleDropdown();
  });

  it("should selected option and clear it", () => {
    cy.contains("Punisher").click();
    getListBoxTrigger().should("contain", "Punisher");
    getClearButton().click();
    getListBoxTrigger().should("contain", "Select one of the options");
    getClearButton().should("not.be.visible");
  });
});

describe("ListBox single select filter", () => {
  beforeEach(() => {
    cy.visitStorybook("ListBox / single", "Filter");
    toggleDropdown();
  });

  it("should show correct amount of filter options", () => {
    getFilterInput().type("wo");
    getPopoverList()
      .children()
      .should("have.length", 2);
  });

  it("filters and selects option", () => {
    getFilterInput().type("Ven");
    getPopoverContent()
      .contains(/venom/i)
      .click();
    getListBoxTrigger().should("contain", "Venom");
  });

  // it.only("should show all options after erasing filtered input", () => {
  //   getFilterInput().type("wo");
  //   getFilterInput().type("{backspace}", "{backspace}");
  //   getPopoverList()
  //     .children()
  //     .should("have.length", 10);
  // });
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
