export function clickListBoxTrigger(testId) {
  cy.tick(300);

  cy.getByTestId(testId).within(() => {
    cy.getByTestId("list-box-trigger").click();
  });
}
