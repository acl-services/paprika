describe("Uploader", () => {
  it("Should render the uploader", () => {
    cy.visitStorybook("forms-uploader--showcase");

    cy.getByText("Drop files to upload here or").should("be.visible");
    cy.getByText("choose from your computer").should("be.visible");
    cy.getByTestId("uploader-dropZone-link").should("be.visible");
  });

  it("Should add a file", () => {
    cy.visitStorybook("forms-uploader--showcase");

    const fileName = "example.json";
    cy.getByTestId("uploader").attachFile(fileName, { subjectType: "drag-n-drop" });

    cy.getByText("example.json").should("be.visible");
  });

  it("Should show error for file size", () => {
    cy.visitStorybook("forms-uploader-examples--file-too-big-error");

    const fileName = "example.json";
    cy.getByTestId("uploader").attachFile(fileName, { subjectType: "drag-n-drop" });

    cy.getByText("File must be smaller than 1B").should("be.visible");
  });

  it("Should display different types of status", () => {
    cy.visitStorybook("forms-uploader-examples--file-statuses");

    cy.getByText("Idle").should("be.visible");

    cy.getByText("Uploading 4.4MiB of 11.8MiB").should("be.visible");
    cy.getByTestId("uploader-file-progressBar")
      .eq(1)
      .should("have.css", "background-color", "rgb(120, 92, 186)");

    cy.getByText("Complete").should("be.visible");
    cy.getByTestId("uploader-file-progressBar")
      .eq(2)
      .should("have.css", "background-color", "rgb(66, 153, 109)");

    cy.getByText("Something went wrong").should("be.visible");
    cy.getByTestId("uploader-file-progressBar")
      .eq(3)
      .should("have.css", "background-color", "rgb(222, 77, 51)");
  });
});
