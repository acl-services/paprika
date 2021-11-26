import { getStoryUrlPrefix } from "../../../.storybook/storyTree";

const storyPrefix = `${getStoryUrlPrefix("DataGrid")}`;

const keyEvent = {
  enter: { keyCode: 13, which: 13, force: true },
  up: { keyCode: 38, which: 38, force: true },
  down: { keyCode: 40, which: 40, force: true },
};

describe("<DataGrid />", () => {
  it("Should have custom css", () => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--custom-css`)
      .get('[data-column-index="1"]')
      .should("have.css", "background-color", "rgb(204, 229, 253)");
  });

  it("Should run a callback function", () => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--callback-function`)
      .wait(100)
      .contains("click me");

    cy.on("window:alert", str => {
      expect(str).to.equal(`Josef Bican ‡`);
    });
  });

  it("Should have infinity scroll", () => {
    cy.visitStorybook(`${storyPrefix}-backyard-tests--infinity-scroll`);

    cy.findByText(/Rows: 300/i).should("exist");
    cy.findAllByRole("rowgroup")
      .last()
      .then($e => {
        window.requestAnimationFrame(() => $e.get(0).scrollTo(0, $e.get(0).scrollHeight));
      });
    cy.findByText(/Rows: 600/i).should("exist");
  });

  it("Should not show collapsed content", () => {
    cy.visitStorybook(`${storyPrefix}-examples--collapsible`);
    cy.findByRole("grid").should("not.contain", /narratives/i);
  });

  xit("should render StickyColumn", () => {
    cy.visitStorybook(`${storyPrefix}-examples--lazy`);
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

  xit("should render ColumnIndicator", () => {
    cy.visitStorybook(`${storyPrefix}-examples--lazy`);
    cy.get('[data-row-index="0"]')
      .eq(0)
      .children()
      .children()
      .should($div => {
        const className = $div[0].className;
        expect(className).to.match(/Checkbox/);
      });
  });

  xit("should render ColumnExpand", () => {
    cy.visitStorybook(`${storyPrefix}-examples--lazy`);
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

  xit("should render load more button when you scroll to the bottom", () => {
    cy.visitStorybook(`${storyPrefix}-examples--lazy`);
    cy.getAllByRole("rowgroup")
      .last()
      // cypress .scrollTo("bottom") is not working correctly
      .then($e => {
        window.requestAnimationFrame(() => $e.get(0).scrollTo(0, $e.width() + 100));
      });

    cy.get('[data-pka-anchor="button"')
      .should("be.visible")
      .click()
      .getAllByRole("rowgroup")
      .last()
      .contains("Albion");
  });

  it("should navigate DataGrid-collapsible with enter key and up, down arrow keys", () => {
    cy.visitStorybook(`${storyPrefix}-examples--collapsible`);

    cy.findByText("Audit Planning").trigger("mouseup");
    cy.findAllByRole("grid").should("contain", "Narratives");

    cy.findByText("Audit Planning")
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
