const keyEvent = {
  enter: { keyCode: 13, which: 13, force: true },
  up: { keyCode: 38, which: 38, force: true },
  down: { keyCode: 40, which: 40, force: true },
};

describe("<DataGrid />", () => {
  it("Should have custom css", () => {
    cy.visitStorybook("data-table-datagrid-backyard-tests--custom-css")
      .get('[data-column-index="1"]')
      .should("have.css", "background-color", "rgb(204, 229, 253)");
  });

  it("Should run a callback function", () => {
    cy.visitStorybook("data-table-datagrid-backyard-tests--callback-function")
      .wait(100)
      .contains("click me");

    cy.on("window:alert", str => {
      expect(str).to.equal(`Josef Bican ‡`);
    });
  });

  it("Should have infinity scroll", () => {
    cy.visitStorybook("data-table-datagrid-backyard-tests--infinity-scroll")
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
    cy.visitStorybook("data-table-datagrid-examples--collapsible")
      .getByRole("grid")
      .contains(/narratives/i)
      .should("not.be.visible");
  });

  it("should render StickyColumn", () => {
    cy.visitStorybook("data-table-datagrid-examples--lazy");
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
    cy.visitStorybook("data-table-datagrid-examples--lazy");
    cy.get('[data-row-index="0"]')
      .eq(0)
      .children()
      .children()
      .should($div => {
        const className = $div[0].className;
        expect(className).to.match(/Checkbox/);
      });
  });

  it("should render ColumnExpand", () => {
    cy.visitStorybook("data-table-datagrid-examples--lazy");
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
    cy.visitStorybook("data-table-datagrid-examples--lazy");
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
    cy.visitStorybook("data-table-datagrid-examples--collapsible");

    cy.getByText("Audit Planning")
      .trigger("mouseup")
      .getAllByRole("grid")
      .should("contain", "Narratives");

    cy.getByText("Audit Planning")
      .trigger("mouseup")
      .trigger("keydown", keyEvent.down)
      .trigger("keyup", keyEvent.enter)
      .trigger("keydown", keyEvent.down)
      .trigger("keydown", keyEvent.down)
      .get(".grid--is-active [role='gridcell']")
      .should($div => {
        expect($div.text()).to.match(/Card Issuance and Management 2/i);
      });
  });
});
