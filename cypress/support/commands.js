// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import "@testing-library/cypress/add-commands";
import "cypress-file-upload";

Cypress.Commands.add("visitStorybook", story => {
  cy.visit(`http://localhost:9009/iframe.html?id=${story}`);
});

Cypress.Commands.add("getByTestId", str => {
  cy.get(`[data-pka-anchor='${str}']`);
});
