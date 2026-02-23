describe('UI Smoke - Cypress Kitchen Sink', () => {
  it('loads and shows expected content', () => {
    cy.visit('https://example.cypress.io/')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})
