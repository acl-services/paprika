const keyEvent = {
  enter: { keyCode: 13, which: 13, force: true },
  up: { keyCode: 38, which: 38, force: true },
  down: { keyCode: 40, which: 40, force: true },
};

describe("<DataGrid/>", () => {
  it("should render StickyColumn", () => {
    cy.visitStorybook("datagrid-lazy--marvel-api-interaction");
    cy.get('[data-column-index="2"]')
      .eq(0)
      .then(e => {
        const coords = e[0].getBoundingClientRect();

        cy.getAllByRole("rowgroup")
          .last()
          .scrollTo(100, 0);

        cy.get('[data-column-index="2"]')
          .eq(0)
          .then(e => {
            const checkcoords = e[0].getBoundingClientRect();
            expect(checkcoords).to.deep.equal(coords);
          });
      });

    cy.getAllByRole("rowgroup")
      .last()
      .scrollTo(-100, 0);

    cy.get('[data-column-index="5"]')
      .eq(0)
      .then(e => {
        const coords = e[0].getBoundingClientRect();

        cy.getAllByRole("rowgroup")
          .last()
          .scrollTo(200, 0);

        cy.get('[data-column-index="5"]')
          .eq(0)
          .then(e => {
            const checkcoords = e[0].getBoundingClientRect();
            expect(checkcoords).to.not.deep.equal(coords);
          });
      });
  });

  it("should render ColumnIndicator", () => {
    cy.visitStorybook("datagrid-lazy--marvel-api-interaction");
    cy.get('[data-row-index="0"]')
      .eq(0)
      .children()
      .children()
      .should($div => {
        const className = $div[0].className;
        expect(className).not.to.match(/Checkbox/);
      });
    cy.get('[data-row-index="0"]')
      .eq(0)
      .children()
      .trigger("mouseover")
      .children()
      .should($div => {
        const className = $div[0].className;
        expect(className).to.match(/Checkbox/);
      });
  });

  it("should render ColumnExpand", () => {
    cy.visitStorybook("datagrid-lazy--marvel-api-interaction");
    cy.get('[data-column-index="1"]')
      .eq(0)
      .children()
      .first()
      .should("have.css", "opacity", "0");

    cy.get('[data-column-index="1"]')
      .eq(0)
      .children()
      .first()
      .trigger("mouseover")
      .should("have.css", "opacity", "1");
  });

  it("should render load more button when you scroll to the bottom", () => {
    cy.visitStorybook("datagrid-lazy--marvel-api-interaction");
    cy.getAllByRole("rowgroup")
      .last()
      .scrollTo("bottom")
      .should("not.contain", "Albion")
      .should("contain", "Abyss");

    cy.get('[data-pka-anchor="button"')
      .should("be.visible")
      .click()
      .wait(200)
      .getAllByRole("rowgroup")
      .last()
      .scrollTo("bottom")
      .contains("Albion");
  });

  it("should navigate DataGrid-collapsible with enter key and up, down arrow keys", () => {
    cy.visitStorybook("datagrid-lazy--collapse");

    cy.getByText("Audit Planning")
      .click()
      .getAllByRole("grid")
      .should("not.contain", "Narratives");
    cy.getByText("Audit Planning")
      .click()
      .focused()
      .trigger("keydown", keyEvent.down)
      .focused()
      .trigger("keydown", keyEvent.down)
      .focused()
      .trigger("keyup", keyEvent.enter)
      .focused()
      .trigger("keydown", keyEvent.up)
      .focused()
      .contains("Narratives");
  });
});
