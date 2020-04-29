describe("DataGrid", () => {

    it("Should have custom css", () => {
        cy.visitStorybook("datagrid-tests--custom-css")
          .get('[data-column-index="1"]')
          .should('have.css', 'background-color', 'rgb(204, 229, 253)');
    })

    it("Should autofocus the last selection", () => {
        cy.visitStorybook("datagrid-regular--autofocus")
          .wait(3000)
          .get('[data-row-index="0"]')
          .click()
          .get('button')
          .click()
          .focused().contains('Josef Bican ‡');
        
    })

    it("Should run a callback function", ()=> {
        cy.visitStorybook("datagrid-tests--callback-function")
          .wait(3000)
          .contains("click me")
          .click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Josef Bican ‡`)
          });
    })

    it('Should have infinity scroll', () => {
        cy.visitStorybook("datagrid-tests--infinity-scroll")
          .wait(3000)
          .getAllByRole('rowgroup')
          .last()
          .then( (element) => {
              const initHeight = element[0].scrollHeight;
              cy.getAllByRole('rowgroup')
                .last()
                .scrollTo(0, 8000)
                .wait(4000)
                .then( (element) => {
                        const newHeight = element[0].scrollHeight;
                        cy.expect(newHeight).to.be.greaterThan(initHeight);
                      }
                )
              }
          )
    })

    it("Should not show collapsed content", () => {
        cy.visitStorybook("datagrid-lazy--collapse")
          .getByRole('grid')
          .contains(/narratives/i)
          .should("not.be.visible");
    })

    it("Should show expanded content", () => {
        cy.visitStorybook("datagrid-lazy--collapse")
          .wait(3000)
          .getByText('Audit Planning')
          .click()
          .getAllByText(/narratives/i)
          .should('be.visible')
    })
});