//Set variables USER and PASS when running npm test
describe('Logs into admin account', () => {
  it('Visits the admin page', () => {
    cy.visit('http://localhost:1337/admin');
    cy.get('#identifier').type(process.env.USER);
    cy.get('#password').type(process.env.PASS);
  });
});
