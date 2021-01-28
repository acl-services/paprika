export function clickListBoxTrigger(testId) {
  cy.tick(300);

  cy.findByTestId(testId).within(() => {
    cy.findByTestId("list-box-trigger").click();
  });
}
