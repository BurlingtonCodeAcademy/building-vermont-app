describe('Adds a building', () => {
  it('Visit the admin page', () => {
    cy.visit('http://localhost:1337/admin');
  });
  it('Enter credentials and log in', () => {
    cy.get('#identifier').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('#rememberMe').uncheck();
    cy.get('button[type="submit"').click();
  });
  it('Navigates to Buildings list', () => {
    cy.get(
      'a[href="/admin/plugins/content-manager/building?source=content-manager"]'
    ).click();
  });
  it('Enter building information', () => {
    cy.get('.content-manager button:first').click();
    cy.get('#name').type('Test Name');
    cy.get('#description').type('Test Description');
    cy.get('#style').type('Test Style');
    cy.get('#type').type('Test Type');
    cy.get('#year').type(1776);
    cy.get('#street').type('Test Street');
    cy.get('#city').type('Test City');
  });
  it('Saves the building to the database', () => {
    cy.get('.content-manager button:nth-child(2)').click();
    cy.contains('Test Name');
  });
  it('Deletes the building', () => {
    cy.wait(500);
    cy.get('img[alt="filter_logo"]')
      .eq(1)
      .click();
    cy.get('input[name="0.value"]').type('Test Name');
    cy.get('.content-manager button:nth-child(2)')
      .eq(0)
      .click();
    cy.get('.content-manager td i')
      .eq(1)
      .click();
    cy.get('.modal-content button')
      .eq(2)
      .click();
  });
});
