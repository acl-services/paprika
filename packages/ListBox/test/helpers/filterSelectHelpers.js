import selectors from "./selectors";

export function shouldHaveListLengthOf(num) {
  cy.get(selectors.filterSelectTableList)
    .children()
    .should("have.length", num);
}

export function individualFilterSelect(trig, triggerAssert, listLength, ...listAsserts) {
  cy.get(selectors.trigger)
    .contains(trig)
    .click();
  cy.get(selectors.popoverList)
    .contains(triggerAssert)
    .click();
  cy.get(selectors.trigger).should("contain", triggerAssert);
  cy.get(selectors.filterSelectTableList)
    .children()
    .should(children => {
      expect(children).to.have.length(listLength);
      listAsserts.map(anAssertion => expect(children).to.contain(anAssertion));
    });
}
