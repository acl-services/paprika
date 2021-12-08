describe("<DataTable />", () => {
  beforeEach(() => {
    cy.visitStorybook(`data-table-tests--screener`);
  });

  it("Should render columns", () => {
    cy.findByText("First name").should("be.visible");
    cy.findByText("Last name").should("be.visible");
    cy.findByText("Age").should("be.visible");
    cy.findByText("Visits").should("be.visible");
    cy.findByText("Status").should("be.visible");
    cy.findByText("Description").should("be.visible");
    cy.findByText("More description").should("be.visible");
    cy.findByText("Progress")
      .scrollIntoView()
      .should("be.visible");
    cy.findByText("Background").should("be.visible");
  });

  it("Should show entire content (calculated row height)", () => {
    const mockedLongestContentOnTheFirstRow =
      "Exercitationem autem doloribus. Iste laboriosam praesentium qui aliquid debitis. Ex tenetur cumque omnis sed quo natus. Voluptatem necessitatibus amet dolores nemo.";

    cy.findByText(mockedLongestContentOnTheFirstRow).should("be.visible");
  });

  it("Should render more rows (virtualized scroll)", () => {
    cy.findAllByTestId("dataTable.tr").should("have.length", 6);
    cy.findByText("Haskell").should("not.exist");
    cy.findAllByTestId("dataTable.tr")
      .eq(5)
      .scrollIntoView();
    cy.findByText("Haskell").should("be.visible");
  });

  it("Should load more data (infinite scroll)", () => {
    cy.findAllByTestId("dataTable.tr").should("have.length", 6);
    cy.findByTestId("dataTable.tbody")
      .parent()
      .scrollTo("bottom");
    cy.wait(500);
    cy.findByTestId("dataTable.tbody")
      .parent()
      .scrollTo("bottom");
    cy.wait(500);
    cy.findByTestId("dataTable.tbody")
      .parent()
      .scrollTo("bottom");
    cy.wait(500);
    cy.findByTestId("dataTable.tbody")
      .parent()
      .scrollTo("bottom");
    cy.wait(500);
    cy.findByTestId("dataTable.tbody")
      .parent()
      .scrollTo("bottom");
    cy.wait(500);
    cy.findByTestId("dataTable.tbody")
      .parent()
      .scrollTo("bottom");
    cy.wait(500);
    cy.findByTestId("dataTable.tbody")
      .parent()
      .scrollTo("bottom");

    // last item for page 1
    cy.findByText("Last person's first name").should("be.visible");
    // first item for page 2
    cy.findAllByText("First person's first name").should("be.visible");
  });
});
