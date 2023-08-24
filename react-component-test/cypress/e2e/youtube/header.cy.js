/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('youtube', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays header logo and title', () => {
    cy.findByText('Youtube').should('exist');
  });
});
