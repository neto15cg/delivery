context('Home', () => {
  beforeEach(() => {
    cy.visit('https://delivery-challenge.netlify.app/');
  });

  it('https://delivery-challenge.netlify.app/', () => {
    cy.intercept('GET', 'https://frozen-badlands-79535.herokuapp.com/predictions?search=Rua%20Americo%20Brasiliense,%20Sao%20Paulo').as('predictions');

    cy.hash().should('be.empty');
    cy.get('[data-testid=home-title]');
    cy.get('[data-testid=button-entrar]').contains('Entrar');
    cy.get('[data-testid=input-drop-down-home]').type('Rua Américo Brasiliense, São Paulo').should('have.value', 'Rua Américo Brasiliense, São Paulo');
    cy.wait('@predictions');

    cy.get('[data-testid=drop-down-item-0]').click();
    cy.contains('Cervejas');
    cy.contains('Destilados');
    cy.contains('Vinhos');
    cy.contains('Sem álcool');
    cy.contains('Petiscos');
    cy.contains('Outros');
    cy.contains('Skol 269ml - Unidade');
  });
});
