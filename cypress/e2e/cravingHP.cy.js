describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    // premier template
    cy.screenshot('install-et-teste')
  })
})