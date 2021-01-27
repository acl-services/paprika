describe("Uploader", () => {
  it("Should render the uploader", () => {
    cy.visitStorybook("forms-uploader--showcase");

    cy.findByText("Drop files to upload here or").should("be.visible");
    cy.findByText("choose from your computer").should("be.visible");
    cy.findByTestId("uploader-dropZone-link").should("be.visible");
  });

  // Will require fake server set up for file attachments to function properly
  it.skip("Should add a file", () => {
    cy.visitStorybook("forms-uploader--showcase");

    const fileName = "example.json";
    cy.findByTestId("uploader").attachFile(fileName, { subjectType: "drag-n-drop" });

    cy.findByText("example.json").should("be.visible");
  });

  // Will require fake server set up for file attachments to function properly
  it.skip("Should show error for file size", () => {
    cy.visitStorybook("forms-uploader-examples--file-too-big-error");

    const fileName = "example.json";
    cy.findByTestId("uploader").attachFile(fileName, { subjectType: "drag-n-drop" });

    cy.findByText("File must be smaller than 1B").should("be.visible");
  });

  it("Should display different types of status", () => {
    cy.visitStorybook("forms-uploader-examples--file-statuses");

    cy.findByText("Idle").should("be.visible");

    cy.findByText("Uploading 4.4MiB of 11.8MiB").should("be.visible");
    cy.findAllByTestId("uploader-file-progressBar")
      .eq(1)
      .should("have.css", "background-color", "rgb(120, 92, 186)");

    cy.findByText("Complete").should("be.visible");
    cy.findAllByTestId("uploader-file-progressBar")
      .eq(2)
      .should("have.css", "background-color", "rgb(66, 153, 109)");

    cy.findByText("Cancelled").should("be.visible");

    cy.findByText("Something went wrong").should("be.visible");
    cy.findAllByTestId("uploader-file-progressBar")
      .eq(4)
      .should("have.css", "background-color", "rgb(222, 77, 51)");
  });
});
