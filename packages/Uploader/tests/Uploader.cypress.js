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

  //   it("Should show error when failing to upload", () => {
  //     cy.visitStorybook("forms-uploader-examples--failed-upload-error");

  //     const fileName = "example.json";
  //     cy.getByTestId("uploader").attachFile(fileName, { subjectType: "drag-n-drop" });

  //     cy.getByText("Internal Server Error").should("be.visible");
  //     cy.getByTestId("uploader-file-progressBar")
  //       .its("background")
  //       .should("eq", "#de4d33");
  //   });

  it("Should show error for file size", () => {
    cy.visitStorybook("forms-uploader-examples--file-too-big-error");

    const fileName = "example.json";
    cy.getByTestId("uploader").attachFile(fileName, { subjectType: "drag-n-drop" });

    cy.getByText("File must be smaller than 1B").should("be.visible");
  });

  //   it("Should not auto upload", () => {
  //     cy.visitStorybook("forms-uploader-examples--no-auto-upload");

  //     const fileName = "example.json";
  //     cy.getByTestId("uploader").attachFile(fileName, { subjectType: "drag-n-drop" });

  //     cy.getByText("Idle").should("be.visible");

  //     cy.getByText("Start upload").click();

  //     cy.getByText("Complete").should("be.visible");

  //     cy.getByTestId("uploader-file-progressBar")
  //       .its("background")
  //       .should("eq", "#42996d");
  //   });

  //   it("Should only accept files dropped on the DropZone", () => {
  //     cy.visitStorybook("forms-uploader-examples--only-accept-files-dropped-on-the-dropzone");

  //     const fileName = "example.json";
  //     cy.getByTestId("body").attachFile(fileName, { subjectType: "drag-n-drop" });

  //     cy.getByText("example.json").should("not.be.visible");

  //     cy.getByText("Complete").should("not.be.visible");
  //   });

  //   it("Should only allow one file per upload", () => {
  //     cy.visitStorybook("forms-uploader-examples--allow-only-one-file-per-upload");

  //     const fileName = "example.json";
  //     const otherFile = "example2.json";
  //     cy.getByTestId("uploader")
  //       .attachFile(fileName, { subjectType: "drag-n-drop" })
  //       .attachFile(otherFile, { subjectType: "drag-n-drop" });

  //     cy.getByText("example.json").should("not.be.visible");
  //     cy.getByText("example2.json").should("be.visible");

  //     cy.getByText("Complete").should("be.visible");
  //   });

  //   it("Should display differant types of status", () => {
  //     cy.visitStorybook("forms-uploader-examples--file-statuses");

  //     cy.getByText("Idle").should("be.visible");

  //     cy.getByText("Uploading 4.4MiB of 11.8MiB").should("be.visible");
  //     cy.getByTestId("uploader-file-progressBar")
  //       .eq(0)
  //       .its("background")
  //       .should("eq", "##785cba");

  //     cy.getByText("Complete").should("be.visible");
  //     cy.getByTestId("uploader-file-progressBar")
  //       .eq(1)
  //       .its("background")
  //       .should("eq", "#42996d");

  //     cy.getByText("Something went wrong").should("be.visible");
  //     cy.getByTestId("uploader-file-progressBar")
  //       .eq(2)
  //       .its("background")
  //       .should("eq", "#de4d33");
  //   });
});
