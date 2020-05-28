describe("DataGrid", () => {
  it("Should have custom css", () => {
    cy.visitStorybook("datagrid-tests--custom-css")
      .get('[data-column-index="1"]')
      .should("have.css", "background-color", "rgb(204, 229, 253)");
  });

  it("Should autofocus the last selection", () => {
    cy.visitStorybook("datagrid-regular--autofocus")
      /* Selecting and click the item does not appear to work in cypress version 3.3.1. It does however work when selected and clicked twice. 
    When updating cypress the repetition can and should be removed to avoid testing fails. */
      // <---from here--->
      .wait(100)
      .get('[data-row-index="0"]')
      .click();
    // <---till here--->
    cy.get('[data-row-index="0"]').click();
    cy.get("button")
      .click()
      .focused()
      .contains("Josef Bican ‡");
  });

  it("Should run a callback function", () => {
    cy.visitStorybook("datagrid-tests--callback-function")
      .wait(100)
      .contains("click me");

    cy.on("window:alert", str => {
      expect(str).to.equal(`Josef Bican ‡`);
    });
  });

  it("Should have infinity scroll", () => {
    cy.visitStorybook("datagrid-tests--infinity-scroll")
      .wait(100)
      .getAllByRole("rowgroup")
      .last()
      .then(element => {
        const initHeight = element[0].scrollHeight;

        cy.getAllByRole("rowgroup")
          .last()
          .scrollTo(0, 8000)
          .wait(1100)
          .then(element => {
            const newHeight = element[0].scrollHeight;
            cy.expect(newHeight).to.be.greaterThan(initHeight);
          });
      });
  });

  it("Should not show collapsed content", () => {
    cy.visitStorybook("datagrid-lazy--collapse")
      .getByRole("grid")
      .contains(/narratives/i)
      .should("not.be.visible");
  });

  it("Should show expanded content", () => {
    cy.visitStorybook("datagrid-lazy--collapse")
      /* Selecting and click the item does not appear to work in cypress version 3.3.1. It does however work when selected and clicked twice. 
    When updating cypress the repetition can and should be removed to avoid testing fails. */
      // <---from here--->
      .getByRole("grid")
      .get('[data-row-index="0"]')
      .eq(0)
      .click();
    // <---till here--->
    cy.getByRole("grid")
      .get('[data-row-index="0"]')
      .eq(0)
      .click()
      .getAllByText(/narratives/i)
      .should("be.visible");
  });
});
