describe('should visit page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/add');
    cy.viewport(300, 600);
  });

  it('should add tweet', () => {
    cy.get('input[formControlName=\'title\']').type('It\'s a test tweet!');
    cy.get('input[formControlName=\'date\']').type('2021-05-25');
    cy.get('button[type="submit"]').click();
    cy.contains('It\'s a test tweet!');
    cy.contains('0:00 25-05-2021');
  });
});
