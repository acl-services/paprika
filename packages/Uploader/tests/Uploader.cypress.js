describe("Uploader", () => {
  beforeEach(() => {
    cy.visitStorybook("forms-uploader--showcase");
  });

  it("Should be visible", () => {
    cy.getByText("Drop files to upload here or").should("be.visible");
    cy.getByText("choose from your computer").should("be.visible");
    cy.getByTestId("uploader-dropZone-link").should("be.visible");
  });

  it("Should open local files", () => {
    cy.getByText("choose from your computer").click({ force: true });
  });
});
