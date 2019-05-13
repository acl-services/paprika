function toggleDropDown() {
  cy.contains("Marvel API").click();
}

describe("Lazy ListBox", () => {
  it("should show marvel characters starting iwth 'n','z', and 's'", () => {
    cy.visitStorybook("ListBox / more examples", "Lazy ListBox");
    toggleDropDown();
  });
});
