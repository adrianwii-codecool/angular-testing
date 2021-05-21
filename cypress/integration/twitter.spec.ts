describe('should visit page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.viewport(300, 600);
  });

  it('should visit main page', () => {
    cy.contains('twitter works!');
  });

  it('should click button', () => {
    cy.get('#clicker').click();
  });

  it('should add tweet', () => {

  });

  it('should test sth', () => {

  });
});
