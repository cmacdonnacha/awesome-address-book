describe('All Tests', function () {
  beforeEach(() => {
    // Will open the baseUrl found inside cypress.json
    cy.visit('');
  });

  it('Should render contacts page', function () {
    cy.findByRole('heading', { name: 'Contacts' }).should('exist');
  });

  it('Should navigate to the Settings page', function () {
    cy.findAllByText('Settings').click();
    cy.findByRole('heading', { name: 'Settings' }).should('exist');
  });

  it('Should save and display selected nationalities', function () {
    cy.findByRole('link', { name: 'Settings' }).click();
    cy.findByRole('checkbox', { name: 'Switzerland' }).click();
    cy.findByRole('button', { name: 'Save' }).click();
    cy.findByRole('link', { name: 'Contacts' }).click();
    cy.findByText('Switzerland').should('exist');
  });
});
