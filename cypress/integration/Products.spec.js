context('Products', () => {
  beforeEach(() => {
    // cy.visit('https://delivery-challenge.netlify.app/products?lat=-23.6317641&lng=-46.7014641');
    cy.visit('http://localhost:9999/products?lat=-23.6317641&lng=-46.7014641');
  });

  it('https://delivery-challenge.netlify.app/products?lat=-23.6317641&lng=-46.7014641', () => {
    cy.intercept('GET', 'https://frozen-badlands-79535.herokuapp.com/predictions?search=Rua%20Americo%20Brasiliense,%20Sao%20Paulo').as('predictions');

    cy.contains('Cervejas');
    cy.contains('Destilados');
    cy.contains('Vinhos');
    cy.contains('Sem álcool');
    cy.contains('Petiscos');
    cy.contains('Outros');
    cy.contains('Skol 269ml - Unidade');
    cy.get('[data-testid=increment-button]').first().click();
    cy.get('[data-testid=button-card-0]').click();
    cy.get('[data-testid=button-card-3]').click();
    cy.get('[data-testid=input-search]').type('Skol beats').should('have.value', 'Skol beats');
    cy.get('[data-testid=input-search]').clear('');
    cy.get('[data-testid=button-card-3]').click();
    cy.get('[data-testid=decrement-button]').first().click();
    cy.get('[data-testid=button-card-1]').click();
    cy.contains('Não foram encontrados produtos disponíveis');
    cy.get('[data-testid=button-card-0]').click();
  });
});
